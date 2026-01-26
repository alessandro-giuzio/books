import type { APIRoute } from 'astro';
import { supabaseServer } from '../../lib/supabaseServer';

export const prerender = false;

const jsonResponse = (status: number, data: unknown) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const getBearerToken = (request: Request) => {
  const authHeader = request.headers.get('authorization') ?? '';
  if (!authHeader.startsWith('Bearer ')) return null;
  return authHeader.replace('Bearer ', '').trim();
};

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const limit = Number(url.searchParams.get('limit') ?? 20);


  // Get books and their average rating
  const { data, error } = await supabaseServer.rpc('get_books_with_avg_rating', { limit_param: limit });

  if (error) {
    return jsonResponse(500, { error: error.message });
  }

  return jsonResponse(200, { data });
};

export const POST: APIRoute = async ({ request }) => {
  const token = getBearerToken(request);
  if (!token) {
    return jsonResponse(401, { error: 'Missing authorization token.' });
  }

  const { data: userData, error: userError } =
    await supabaseServer.auth.getUser(token);
  if (userError || !userData?.user) {
    return jsonResponse(401, { error: 'Invalid user token.' });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return jsonResponse(400, { error: 'Invalid JSON body.' });
  }

  const title = String(body.title ?? '').trim();
  const author = String(body.author ?? '').trim();
  if (!title || !author) {
    return jsonResponse(400, { error: 'Title and author are required.' });
  }

  const tags = Array.isArray(body.tags)
    ? body.tags.map((tag: string) => String(tag).trim()).filter(Boolean)
    : typeof body.tags === 'string'
      ? body.tags
          .split(',')
          .map(tag => tag.trim())
          .filter(Boolean)
      : [];

  const payload = {
    title,
    author,
    cover_url: body.cover_url ?? null,
    summary: body.summary ?? null,
    tags,
    isbn: body.isbn ?? null,
    published_year: body.published_year ?? null,
    page_count: body.page_count ?? null,
    created_by: userData.user.id,
  };

  const { data, error } = await supabaseServer
    .from('books')
    .insert(payload)
    .select('*')
    .single();

  if (error) {
    return jsonResponse(500, { error: error.message });
  }

    // Insert initial rating if provided and valid
    const rating = Number(body.rating);
    if (data && userData.user.id && rating >= 1 && rating <= 5) {
      await supabaseServer
        .from('book_ratings')
        .upsert([
          {
            book_id: data.id,
            user_id: userData.user.id,
            rating,
          },
        ], { onConflict: ['book_id', 'user_id'] });
    }

  return jsonResponse(201, { data });
};
