# Submit book form (auth POST)

We now have a dedicated submit page that posts to `/api/books` with the bearer
token provided by `authFetch`.

## Added files
- `src/components/book/BookSubmitForm.vue`
  - Vue form that gathers title/author/summary/tags/cover URL and POSTs to
    `/api/books`.
  - Uses `authFetch` to attach `Authorization: Bearer <token>`.
  - Blocks submission when there is no active Supabase session.
- `src/pages/submit.astro`
  - Page wrapper that renders the submit form.

## Notes
- The "Submit a book" link on the feed already points to `/submit`.
- Future: replace cover URL input with Supabase Storage upload if needed.
