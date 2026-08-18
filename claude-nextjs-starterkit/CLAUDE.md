# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## ⚠️ Next.js 16 — not the Next.js you know

This repo runs **Next.js 16.3.1** (Turbopack by default) with **React 19.2**. APIs and conventions differ
from older training data (Next.js 13–15 patterns). Before writing route/data-fetching code, check
`node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md` for breaking changes. Notable ones
already in play in this codebase:

- Route props use generated global helpers instead of hand-written types: `LayoutProps<"/">`,
  `PageProps<'/path'>`, `RouteContext`. See `app/layout.tsx` for a live example. Don't hand-roll
  `{ params, searchParams }` prop types.
- `params`/`searchParams` are always async (`await props.params`) — no synchronous compat mode exists in v16.
- `next.config.ts` uses top-level `turbopack` / `cacheComponents` options, not `experimental.*`.
- `middleware.ts` is deprecated in favor of `proxy.ts` (Node runtime only, no `edge` runtime).
- `next lint` is removed; linting runs via the ESLint CLI (`npm run lint` → `eslint`).

## Commands

```bash
npm run dev    # 개발 서버 실행 (Turbopack, http://localhost:3000)
npm run build  # 프로덕션 빌드
npm run start  # 프로덕션 서버 실행
npm run lint   # ESLint 검사 (eslint-config-next flat config)
```

No test runner is configured in this repo yet.

## Architecture

App Router project using `app/` for routes and layouts:

- `app/layout.tsx` — root layout. Sets up `Geist`/`Geist_Mono` fonts as CSS variables, page metadata, and an
  inline `<script>` that applies the persisted theme to `<html class="dark">` before hydration (prevents
  dark-mode FOUC). Reads `LayoutProps<"/">` as its prop type (Next.js 16 typed-route helper, not manually
  declared).
- `app/page.tsx`, `app/about/page.tsx`, `app/dashboard/page.tsx` — routes.
- `app/loading.tsx`, `app/error.tsx`, `app/not-found.tsx`, `app/global-error.tsx` — App Router convention
  files for loading/error/404 UI.
- `app/globals.css` — Tailwind v4 + light/dark theme CSS variables.
- `next.config.ts` — `typedRoutes: true` is enabled, so `Link`/`router.push` hrefs are statically checked
  against actual routes; non-literal hrefs need `as Route`.

### Dark mode

Implemented across three pieces that must stay in sync:
1. `app/layout.tsx` inline script — reads `localStorage.theme` (or `prefers-color-scheme`) and toggles the
   `dark` class on `<html>` before React hydrates.
2. `hooks/use-theme.ts` — `useTheme()` client hook; reads current state off the DOM class, exposes
   `toggleTheme()` which updates the class, `localStorage`, and component state together.
3. `components/theme-toggle.tsx` — the toggle button UI.

### UI component pattern (`components/ui/`)

Components wrap **Base UI** headless primitives (`@base-ui/react/*`) with **class-variance-authority**
variants, following shadcn's `base-nova` style (see `components.json`). Follow `components/ui/button.tsx`
as the reference implementation when adding new components:

- Import the Base UI primitive (e.g. `Button as ButtonPrimitive` from `@base-ui/react/button`).
- Define variants/sizes with `cva(...)`.
- Set `data-slot="<component>"` on the rendered primitive.
- Merge classes with `cn()` from `lib/utils.ts` (`clsx` + `tailwind-merge`).
- Base UI components often expose a `render` prop / `nativeButton={false}` pattern to render as a different
  element (e.g. rendering a `Button` as a `next/link` `<Link>` — see the nav in `app/page.tsx`) instead of
  wrapping children in an extra DOM node.

New shadcn-compatible components can also be pulled in via `npx shadcn add <component>` — `components.json`
already points at `app/globals.css` and the `@/components`, `@/lib`, `@/hooks` aliases.

### Path aliases

`@/*` maps to the repo root (`tsconfig.json`), matching the aliases declared in `components.json`
(`@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`).
