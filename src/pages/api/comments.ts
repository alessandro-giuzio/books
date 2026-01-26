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
  const bookId = url.searchParams.get('book_id');
  const limit = Number(url.searchParams.get('limit') ?? 50);

  if (!bookId) {
    return jsonResponse(400, { error: 'book_id is required.' });
  }

  const { data, error } = await supabaseServer
    .from('comments_with_user')
    .select('*')
    .eq('book_id', bookId)
    .order('created_at', { ascending: true })
    .limit(Number.isFinite(limit) ? limit : 50);

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

  const bookId = String(body.book_id ?? '').trim();
  const commentBody = String(body.body ?? '').trim();
  if (!bookId || !commentBody) {
    return jsonResponse(400, { error: 'book_id and body are required.' });
  }

  const payload = {
    book_id: bookId,
    body: commentBody,
    created_by: userData.user.id,
  };

  const { data, error } = await supabaseServer
    .from('comments')
    .insert(payload)
    .select('*')
    .single();

  if (error) {
    return jsonResponse(500, { error: error.message });
  }

  return jsonResponse(201, { data });
};
