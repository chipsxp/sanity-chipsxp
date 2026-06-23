# Graph Report - C:\Users\manag\Github-repo\sanity-chipsxp  (2026-06-22)

## Corpus Check
- 50 files · ~616,358 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 120 nodes · 61 edges · 66 communities detected
- Extraction: 77% EXTRACTED · 21% INFERRED · 2% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]

## God Nodes (most connected - your core abstractions)
1. `Key Configuration Files` - 6 edges
2. `Next.js 16 and Sanity v5 Architecture` - 5 edges
3. `Sanity Integration Data Flow` - 5 edges
4. `Architectural Decisions Registry` - 5 edges
5. `ADR-001: Embed Sanity Studio Inside Next.js App` - 4 edges
6. `generateMetadata()` - 3 edges
7. `Project Memory System (AGENTS)` - 3 edges
8. `Embeddings Index` - 3 edges
9. `Sanity LLM Docs Library Index` - 3 edges
10. `Sanity Core Concepts` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Memory Files Registry` --semantically_similar_to--> `Project Memory System (CLAUDE)`  [INFERRED] [semantically similar]
  AGENTS.md → CLAUDE.md
- `Architectural Decisions Registry` --references--> `AlloyDB Adoption Hyperedge Description`  [AMBIGUOUS]
  docs/project_notes/decisions.md → graphify-out/GRAPH_REPORT.md
- `generateMetadata()` --calls--> `urlFor()`  [INFERRED]
  C:\Users\manag\Github-repo\sanity-chipsxp\app\studio\[[...tool]]\page.tsx → C:\Users\manag\Github-repo\sanity-chipsxp\sanity\lib\image.ts
- `Next.js Agent Rules` --references--> `Next.js 16 and Sanity v5 Architecture`  [EXTRACTED]
  AGENTS.md → CLAUDE.md
- `SanityLive Component` --conceptually_related_to--> `Editing page.tsx and Auto-Updates`  [INFERRED]
  CLAUDE.md → README.md

## Hyperedges (group relationships)
- **Project Memory System and Its Four Memory Files** — agents_memory_files, bugs_template, decisions_template, key_facts_template, issues_template [EXTRACTED 1.00]
- **Sanity Live Data Flow: fetch, live component, raw client** — claude_sanity_fetch, claude_sanity_live, claude_sanity_client [EXTRACTED 0.90]
- **Next.js Development and Setup Workflow** — readme_getting_started, claude_commands, readme_page_editing [INFERRED 0.85]
- **Sanity LLM Docs Index Structure** — index_card_sanity_llm_documentation_library_index, index_card_agent_actions_ai_integration_generate_translate_agent_actions, index_card_embeddings_indexing_semantic_search_embeddings_index, index_card_sanity_core_concepts_project_setup_core_concepts, index_card_sanity_react_sdk_hooks_components_react_sdk, index_card_sanity_documentation_library_references_documentation [INFERRED 0.90]
- **Project Memory Files Bundle** — bugs_bug_log_template, issues_work_log_template, decisions_architectural_decisions_registry, key_facts_project_overview [INFERRED 0.86]
- **Embedded Studio Operating Model** — decisions_adr001_embedded_studio, key_facts_project_overview, key_facts_local_development_ports [INFERRED 0.82]
- **Live Content Data Flow** — decisions_adr002_sanity_live_fetch, key_facts_data_fetching_conventions, key_facts_project_overview [INFERRED 0.88]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.2
Nodes (12): Bug Log Template, ADR-001: Embed Sanity Studio Inside Next.js App, Architectural Decisions Registry, Rationale: Single deployment and lower ops complexity, AlloyDB Adoption Hyperedge Description, Suggested Questions Section, Graph Report Summary Metrics (94 nodes, 58 edges, 41 communities), Surprising Connections Section (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (10): Next.js Agent Rules, Embedded Sanity Studio Route, Required Environment Variables, Key Configuration Files, Next.js 16 and Sanity v5 Architecture, sanity.cli.ts - Sanity CLI Config, sanity.config.ts - Studio Config, sanity/env.ts - Env Var Validation (+2 more)

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (10): Agent Actions, Embeddings Index, Sanity Core Concepts, GROQ Queries, Sanity Documentation, Sanity LLM Docs Library Index, Sanity React SDK, GROQ Reference (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.29
Nodes (2): urlFor(), generateMetadata()

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (6): urlFor Image URL Builder, Raw Sanity Client, sanityFetch (Live Content API), Sanity Integration Data Flow, SanityLive Component, Editing page.tsx and Auto-Updates

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (4): Memory-Aware Protocols, Memory Files Registry, Project Memory System (AGENTS), Project Memory System (CLAUDE)

### Community 6 - "Community 6"
Cohesion: 0.5
Nodes (4): Blueprints Reference, Sanity Blueprints, Sanity Functions, Sanity Content OS

### Community 7 - "Community 7"
Cohesion: 0.67
Nodes (3): ADR-002: Use sanityFetch + SanityLive for Data Fetching, Rationale: Live updates with Next.js cache integration, Data Fetching Conventions

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Community 11"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Community 16"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Community 25"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "Community 26"
Cohesion: 1.0
Nodes (0): 

### Community 27 - "Community 27"
Cohesion: 1.0
Nodes (0): 

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (0): 

### Community 29 - "Community 29"
Cohesion: 1.0
Nodes (0): 

### Community 30 - "Community 30"
Cohesion: 1.0
Nodes (0): 

### Community 31 - "Community 31"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "Community 32"
Cohesion: 1.0
Nodes (0): 

### Community 33 - "Community 33"
Cohesion: 1.0
Nodes (0): 

### Community 34 - "Community 34"
Cohesion: 1.0
Nodes (0): 

### Community 35 - "Community 35"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "Community 36"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (0): 

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (0): 

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (0): 

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (0): 

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (0): 

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (0): 

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (0): 

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (0): 

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (0): 

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (0): 

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (0): 

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (0): 

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (0): 

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (1): Claude Repository Commands

### Community 56 - "Community 56"
Cohesion: 1.0
Nodes (1): Path Alias Configuration (@/*)

### Community 57 - "Community 57"
Cohesion: 1.0
Nodes (1): Development Server Setup

### Community 58 - "Community 58"
Cohesion: 1.0
Nodes (1): Font Optimization with Geist

### Community 59 - "Community 59"
Cohesion: 1.0
Nodes (1): Deployment on Vercel

### Community 60 - "Community 60"
Cohesion: 1.0
Nodes (1): Tasks Placeholder

### Community 61 - "Community 61"
Cohesion: 1.0
Nodes (1): Document SVG Icon

### Community 62 - "Community 62"
Cohesion: 1.0
Nodes (1): Globe SVG Icon

### Community 63 - "Community 63"
Cohesion: 1.0
Nodes (0): 

### Community 64 - "Community 64"
Cohesion: 1.0
Nodes (1): Vercel Logo SVG

### Community 65 - "Community 65"
Cohesion: 1.0
Nodes (1): Window Icon SVG

## Ambiguous Edges - Review These
- `Architectural Decisions Registry` → `AlloyDB Adoption Hyperedge Description`  [AMBIGUOUS]
  graphify-out/GRAPH_REPORT.md · relation: references

## Knowledge Gaps
- **33 isolated node(s):** `Next.js Agent Rules`, `Memory-Aware Protocols`, `Claude Repository Commands`, `sanityFetch (Live Content API)`, `Raw Sanity Client` (+28 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 8`** (2 nodes): `layout.tsx`, `RootLayout()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (2 nodes): `robots.ts`, `robots()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `sitemap.ts`, `sitemap()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `page.tsx`, `ArticlePage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (2 nodes): `env.ts`, `assertValue()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `structure.ts`, `structure()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (1 nodes): `eslint.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (1 nodes): `next.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (1 nodes): `playwright.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `postcss.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `sanity.cli.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `sanity.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `sanity.types.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `Footer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (1 nodes): `Header.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `PageBuilder.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (1 nodes): `PortableTextRenderer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (1 nodes): `FeaturesBlock.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (1 nodes): `HeroBlock.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (1 nodes): `SplitImageBlock.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (1 nodes): `TwoColumnLayoutBlock.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (1 nodes): `client.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (1 nodes): `live.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (1 nodes): `queries.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (1 nodes): `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (1 nodes): `article.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (1 nodes): `comment.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (1 nodes): `page.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (1 nodes): `siteFooter.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (1 nodes): `siteHeader.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (1 nodes): `accessibleImage.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `footer.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `header.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `portableText.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `seo.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `advertisingBlock.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `articleListBlock.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `authorBioBlock.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `faqBlock.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `featuresBlock.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `heroBlock.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `searchBlock.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `socialShareBlock.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `splitImageBlock.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `twoColumnLayout.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `sanity-chipsxp.spec.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `Claude Repository Commands`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `Path Alias Configuration (@/*)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (1 nodes): `Development Server Setup`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (1 nodes): `Font Optimization with Geist`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 59`** (1 nodes): `Deployment on Vercel`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (1 nodes): `Tasks Placeholder`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (1 nodes): `Document SVG Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (1 nodes): `Globe SVG Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (1 nodes): `next.svg`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (1 nodes): `Vercel Logo SVG`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (1 nodes): `Window Icon SVG`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Architectural Decisions Registry` and `AlloyDB Adoption Hyperedge Description`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `Next.js 16 and Sanity v5 Architecture` connect `Community 1` to `Community 4`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `Architectural Decisions Registry` connect `Community 0` to `Community 7`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Why does `Sanity Integration Data Flow` connect `Community 4` to `Community 1`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `ADR-001: Embed Sanity Studio Inside Next.js App` (e.g. with `Project Overview (Next.js 16 + Sanity v5)` and `Suggested Questions Section`) actually correct?**
  _`ADR-001: Embed Sanity Studio Inside Next.js App` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Next.js Agent Rules`, `Memory-Aware Protocols`, `Claude Repository Commands` to the rest of the system?**
  _33 weakly-connected nodes found - possible documentation gaps or missing edges._