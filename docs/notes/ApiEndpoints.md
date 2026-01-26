# Supabase API endpoints (server-side)

This project now uses Astro API routes for server-side writes so the Supabase
service role key never reaches the browser.

## Added files
- `src/lib/supabaseServer.ts`
  - Server-only Supabase client that uses `PUBLIC_SUPABASE_URL` and
    `SUPABASE_SERVICE_ROLE_KEY`.
- `src/pages/api/books.ts`
  - `GET /api/books?limit=20` returns latest books from `books_with_stats`.
  - `POST /api/books` creates a book (requires `Authorization: Bearer <token>`).
- `src/pages/api/comments.ts`
  - `GET /api/comments?book_id=<id>&limit=50` returns comments from
    `comments_with_user`.
  - `POST /api/comments` creates a comment (requires `Authorization: Bearer <token>`).

## Required env vars
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server only; set in `.env` and deploy settings)

## Next wiring steps
- Add the bearer token from `supabase.auth.getSession()` when calling POST
  endpoints in Vue components.
- Build the Vue feed and comment components to call these endpoints.
