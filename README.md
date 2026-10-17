# Irakurketa Lehiaketa

**Irakurketa Lehiaketa** is a friendly yearly reading competition among friends. The site keeps track of the books people read, shares recommendations, and shows the standings for each year.

Visit the site at [irakurleak.eus](https://irakurleak.eus).

## What’s inside

- Yearly reading competitions, with participant profiles, book lists, points, and leaderboards.
- A searchable-by-category book collection and individual book pages.
- A Supabase-powered book feed with book submissions, comments, and user authentication.
- A responsive site built with Astro and Vue.

## Tech stack

- [Astro](https://astro.build/) with Vue components and Alpine.js
- Tailwind CSS
- [Supabase](https://supabase.com/) for authentication and database-backed features
- [Netlify](https://www.netlify.com/) adapter and scheduled rebuild function

## Run locally

### Requirements

- Node.js 20 or later
- npm
- A Supabase project for the authentication and database-backed features

### Install and start

```sh
npm ci
npm run dev
```

Astro serves the site at `http://localhost:4321`.

Create a `.env` file in the project root for Supabase features:

```dotenv
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

The public URL and anon key are used by the browser client. The service role key is server-only: never expose it in client code or commit it to the repository. `.env` files are ignored by Git.

To enable the database-backed features, apply [`supabase-schema.sql`](supabase-schema.sql) to your Supabase project. The schema and related setup notes are in [`docs/SUPABASE_SCHEMA.md`](docs/SUPABASE_SCHEMA.md).

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Run Astro checks and build the production site |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
  components/       Astro and Vue UI components
  content/          Participant profiles and book entries
  layouts/          Shared page layouts
  lib/              Supabase clients and shared utilities
  pages/             File-based pages and API routes
  styles/            Global and page styles
docs/                Setup and feature notes
netlify/functions/   Scheduled rebuild function
supabase-schema.sql  Supabase database schema
```

Book and participant data is maintained as Astro content collections under `src/content/`. Collection schemas are defined in [`src/content/config.ts`](src/content/config.ts); check the schema and an existing entry in the relevant collection before adding content.

## Supabase API

The Astro API routes provide:

- `GET /api/books?limit=20` — fetch recent books.
- `POST /api/books` — submit a book (requires a valid Supabase bearer token).
- `GET /api/comments?book_id=<id>&limit=50` — fetch comments for a book.
- `POST /api/comments` — add a comment (requires a valid Supabase bearer token).

The server routes use `SUPABASE_SERVICE_ROLE_KEY`; keep it configured only in server/deployment environment settings. More details are in [`docs/notes/ApiEndpoints.md`](docs/notes/ApiEndpoints.md), [`docs/AUTH_FLOW.md`](docs/AUTH_FLOW.md), and [`docs/notes/CommentsFlow.md`](docs/notes/CommentsFlow.md).

## Deployment

The repository includes a Netlify configuration in [`netlify.toml`](netlify.toml). Set the three Supabase environment variables in the deployment environment when enabling database-backed features, then deploy the site with the Netlify build command, `npm run build`.
