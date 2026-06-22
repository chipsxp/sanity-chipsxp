# Key Facts

Non-sensitive project configuration and frequently-needed reference information.
**Never store passwords, API keys, tokens, or secrets here.**

## Project Overview

- **Stack**: Next.js 16 + Sanity v5
- **Studio**: Embedded inside the Next.js app at `/studio` (not a separate process)
- **Sanity Studio Route**: `app/studio/[[...tool]]/page.tsx`
- **Deployment target**: Vercel

## Local Development

**Ports:**
- Next.js dev server: `3000`
- Sanity Studio: served from same Next.js process at `http://localhost:3000/studio`

**Commands:**
- `npm run dev` — start dev server on :3000
- `npm run build` — production build
- `npm run lint` — ESLint

## Environment Variables

Required in `.env.local` (never commit):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=   # optional, defaults to 2026-06-19
```

## Key Source Files

| File | Purpose |
|------|---------|
| `sanity/env.ts` | Validates and exports env vars. Throws at startup if required vars are missing. |
| `sanity/schemaTypes/index.ts` | Schema registry — add new document/object types here |
| `sanity/structure.ts` | Controls Studio sidebar structure |
| `sanity.config.ts` | Studio config: basePath, projectId, dataset, plugins, schema |
| `sanity.cli.ts` | Sanity CLI config — reads same env vars as the app |
| `sanity/lib/live.ts` | Exports `sanityFetch` and `SanityLive` for live content |
| `sanity/lib/client.ts` | Raw Sanity client (use `sanityFetch` in Server Components instead) |
| `sanity/lib/image.ts` | Exports `urlFor` for building image URLs from Sanity image refs |

## Path Aliases

- `@/*` → repo root (e.g. `@/sanity/lib/client`)

## Data Fetching Conventions

- Server Components: use `sanityFetch` from `sanity/lib/live.ts`
- Add `<SanityLive />` to root layout for live content updates
- Raw `client` from `sanity/lib/client.ts` only for non-Next.js contexts (e.g. scripts)
- Images: use `urlFor(imageRef)` from `sanity/lib/image.ts`

## Important Notes

- **Next.js 16 has breaking changes** — read `node_modules/next/dist/docs/` before writing Next.js code
- Sanity v5 API — check `mcp__Sanity__read_docs` or Sanity MCP tools before writing Sanity-specific code
