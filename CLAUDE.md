# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # start Next.js dev server on :3000
npm run build     # production build
npm run lint      # ESLint
```

No test suite is configured yet.

## Architecture

This is a **Next.js 16 + Sanity v5** project. Next.js 16 has breaking changes — read `node_modules/next/dist/docs/` before writing any Next.js code.

### Sanity integration

The Sanity Studio is embedded inside the Next.js app at `/studio` via `app/studio/[[...tool]]/page.tsx`. It is not a separate process.

Data flow for pages:
- Use `sanityFetch` (from `sanity/lib/live.ts`) in Server Components to fetch content. This keeps data automatically updated via Sanity's Live Content API.
- Add `<SanityLive />` (also from `sanity/lib/live.ts`) to the root layout when live updates are needed.
- Use the raw `client` (from `sanity/lib/client.ts`) only when `sanityFetch` is not appropriate (e.g., non-Next.js contexts).

Image handling: use `urlFor` from `sanity/lib/image.ts` to build image URLs from Sanity image references.

### Key configuration files

| File | Purpose |
|------|---------|
| `sanity/env.ts` | Validates and exports env vars. Throws at startup if required vars are missing. |
| `sanity/schemaTypes/index.ts` | Schema registry — add new document/object types here. |
| `sanity/structure.ts` | Controls Studio sidebar structure. |
| `sanity.config.ts` | Studio config: basePath, projectId, dataset, plugins, schema. |
| `sanity.cli.ts` | Sanity CLI config — reads same env vars as the app. |

### Required environment variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=   # optional, defaults to 2026-06-19
```

### Path alias

`@/*` maps to the repo root (e.g. `@/sanity/lib/client`).

## Project Memory System

This project maintains institutional knowledge in `docs/project_notes/` for consistency across sessions.

### Memory Files

- **bugs.md** - Bug log with dates, solutions, and prevention notes
- **decisions.md** - Architectural Decision Records (ADRs) with context and trade-offs
- **key_facts.md** - Project configuration, credentials, ports, important URLs
- **issues.md** - Work log with ticket IDs, descriptions, and URLs

### Memory-Aware Protocols

**Before proposing architectural changes:**
- Check `docs/project_notes/decisions.md` for existing decisions
- Verify the proposed approach doesn't conflict with past choices
- If it does conflict, acknowledge the existing decision and explain why a change is warranted

**When encountering errors or bugs:**
- Search `docs/project_notes/bugs.md` for similar issues
- Apply known solutions if found
- Document new bugs and solutions when resolved

**When looking up project configuration:**
- Check `docs/project_notes/key_facts.md` for credentials, ports, URLs, service accounts
- Prefer documented facts over assumptions

**When completing work on tickets:**
- Log completed work in `docs/project_notes/issues.md`
- Include ticket ID, date, brief description, and URL

**When user requests memory updates:**
- Update the appropriate memory file (bugs, decisions, key_facts, or issues)
- Follow the established format and style (bullet lists, dates, concise entries)

### Style Guidelines for Memory Files

- **Prefer bullet lists over tables** for simplicity and ease of editing
- **Keep entries concise** (1-3 lines for descriptions)
- **Always include dates** for temporal context
- **Include URLs** for tickets, documentation, monitoring dashboards
- **Manual cleanup** of old entries is expected (not automated)
