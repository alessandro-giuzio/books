# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` / `npm start` — start the Astro dev server (http://localhost:4321)
- `npm run build` — runs `astro check && astro build`; must pass with zero type errors before shipping
- `npm run preview` — serve the built `dist/` output locally (use this, not `dev`, to sanity-check the actual static build)
- `npx astro check` — type-check only, without building

There is no test suite and no linter configured in this repo.

## Architecture

This is a **static Astro site with no backend**: `output: 'static'` in `astro.config.mjs`, no adapter, no SSR, no API routes, no Supabase. `src/content/config.ts` intentionally exports `{}` — there are no content collections.

The entire site is a single page, `src/pages/index.astro`, wrapped in `src/layouts/Layout2025.astro`. That layout pulls in global fonts/CSS and renders `src/components/dashboard/NavBar.astro` and `src/components/dashboard/Footer.astro` around the page content — both are intentionally minimal (a home link and a GitHub link) since there is only one route plus `404.astro`.

### What the page actually is

The site used to be a live, multi-year (2024/2025/2026) bilingual (Spanish/Basque) reading-competition tracker with Supabase-backed auth, book submission, and comments, deployed via Netlify with a scheduled rebuild function. That app was decommissioned and this repo was rewritten into a **static portfolio case study** describing it: what was built, the tech stack used, and lessons learned — illustrated with real screenshots of the old app captured before it was torn down. Those screenshots live in `public/case-study/` and are referenced directly by path from `index.astro`.

Do not reintroduce Supabase, content collections, or multi-page routing for this project without an explicit request — the whole point of the current architecture is that it's a single static page with no backend.

### Styling stack

- Tailwind CSS v4 + daisyUI, configured in `tailwind.config.mjs` (custom `basque` and `le` color palettes, several daisyUI themes enabled)
- shadcn-vue component conventions are wired up via `components.json` (`style: new-york`, aliases resolving into `src/components/ui`, `src/lib`, etc.) but the alias targets differ from where components actually live now (`src/components/UI/button`, `src/components/UI/card`) — check actual import paths rather than trusting `components.json` blindly
- Vite path aliases (`@`, `@components`, `@styles`, `@assets`) are defined in `astro.config.mjs` and mirrored in `tsconfig.json`
- Vue is still an active Astro integration (`@astrojs/vue`) even though the current page uses no Vue islands — the shadcn-vue `Button`/`Card` components under `src/components/UI/` are Vue components kept as reusable building blocks
- `astro-vtbot`'s `ClientRouter`/`ReplacementSwap` are wired into `Layout2025.astro` for view-transition-style navigation, relevant even on a single-page site for smooth in-page interactions
