# Authenticated POST requests (client)

To write to `/api/books` and `/api/comments`, the client must include a bearer
token from Supabase auth. The helper below centralizes that logic.

## Helper
- `src/lib/authFetch.js`
  - Uses `supabase.auth.getSession()` and adds
    `Authorization: Bearer <token>` when available.

## Usage example
```js
import { authFetch } from '../lib/authFetch.js';

await authFetch('/api/books', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title, author }),
});
```

## Next step
Wire `authFetch` into the submit form and comment form when those components are
implemented.
