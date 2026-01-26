# Comments flow (auth POST)

The book detail page now renders comments via a Vue island and posts new
comments with the authenticated bearer token.

## Added files
- `src/components/book/BookComments.vue`
  - Fetches `/api/comments?book_id=...` for the list.
  - Uses `authFetch` to POST new comments.
  - Shows sign-in CTA if no session is active.
- `src/pages/books/[id].astro`
  - Server-rendered book detail page using `books_with_stats`.
  - Mounts the comments island with `client:visible`.

## Notes
- Feed cards now link to `/books/<id>`.
- The detail page relies on `PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
  being set for server fetch.
