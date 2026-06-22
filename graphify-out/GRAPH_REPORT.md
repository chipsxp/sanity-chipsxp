# Graph Report - sanity-chipsxp  (2026-06-19)

## Corpus Check
- 38 files · ~590,699 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 105 nodes · 56 edges · 17 communities detected
- Extraction: 77% EXTRACTED · 21% INFERRED · 2% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]

## God Nodes (most connected - your core abstractions)
1. `Key Configuration Files` - 6 edges
2. `Next.js 16 and Sanity v5 Architecture` - 5 edges
3. `Sanity Integration Data Flow` - 5 edges
4. `Architectural Decisions Registry` - 5 edges
5. `ADR-001: Embed Sanity Studio Inside Next.js App` - 4 edges
6. `Project Memory System (AGENTS)` - 3 edges
7. `Embeddings Index` - 3 edges
8. `Sanity LLM Docs Library Index` - 3 edges
9. `Sanity Core Concepts` - 3 edges
10. `GROQ Queries` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Memory Files Registry` --semantically_similar_to--> `Project Memory System (CLAUDE)`  [INFERRED] [semantically similar]
  AGENTS.md → CLAUDE.md
- `Architectural Decisions Registry` --references--> `AlloyDB Adoption Hyperedge Description`  [AMBIGUOUS]
  docs/project_notes/decisions.md → graphify-out/GRAPH_REPORT.md
- `Next.js Agent Rules` --references--> `Next.js 16 and Sanity v5 Architecture`  [EXTRACTED]
  AGENTS.md → CLAUDE.md
- `SanityLive Component` --conceptually_related_to--> `Editing page.tsx and Auto-Updates`  [INFERRED]
  CLAUDE.md → README.md
- `ADR-001: Embed Sanity Studio Inside Next.js App` --conceptually_related_to--> `Suggested Questions Section`  [INFERRED]
  docs/project_notes/decisions.md → graphify-out/GRAPH_REPORT.md

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
Cohesion: 0.22
Nodes (10): Next.js Agent Rules, Embedded Sanity Studio Route, Required Environment Variables, Key Configuration Files, Next.js 16 and Sanity v5 Architecture, sanity.cli.ts - Sanity CLI Config, sanity.config.ts - Studio Config, sanity/env.ts - Env Var Validation (+2 more)

### Community 1 - "Community 1"
Cohesion: 0.22
Nodes (10): Agent Actions, Embeddings Index, Sanity Core Concepts, GROQ Queries, Sanity Documentation, Sanity LLM Docs Library Index, Sanity React SDK, GROQ Reference (+2 more)

### Community 2 - "Community 2"
Cohesion: 0.29
Nodes (8): Bug Log Template, ADR-002: Use sanityFetch + SanityLive for Data Fetching, Architectural Decisions Registry, Rationale: Live updates with Next.js cache integration, AlloyDB Adoption Hyperedge Description, Surprising Connections Section, Issues Work Log Template, Data Fetching Conventions

### Community 3 - "Community 3"
Cohesion: 0.29
Nodes (7): ADR-001: Embed Sanity Studio Inside Next.js App, Rationale: Single deployment and lower ops complexity, Suggested Questions Section, Graph Report Summary Metrics (94 nodes, 58 edges, 41 communities), Required Environment Variables, Local Development Ports, Project Overview (Next.js 16 + Sanity v5)

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (6): urlFor Image URL Builder, Raw Sanity Client, sanityFetch (Live Content API), Sanity Integration Data Flow, SanityLive Component, Editing page.tsx and Auto-Updates

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (4): Memory-Aware Protocols, Memory Files Registry, Project Memory System (AGENTS), Project Memory System (CLAUDE)

### Community 6 - "Community 6"
Cohesion: 0.5
Nodes (4): Blueprints Reference, Sanity Blueprints, Sanity Functions, Sanity Content OS

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (1): Claude Repository Commands

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (1): Path Alias Configuration (@/*)

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (1): Development Server Setup

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (1): Font Optimization with Geist

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (1): Deployment on Vercel

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (1): Tasks Placeholder

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (1): Document SVG Icon

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): Globe SVG Icon

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (1): Vercel Logo SVG

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (1): Window Icon SVG

## Ambiguous Edges - Review These
- `Architectural Decisions Registry` → `AlloyDB Adoption Hyperedge Description`  [AMBIGUOUS]
  graphify-out/GRAPH_REPORT.md · relation: references

## Knowledge Gaps
- **33 isolated node(s):** `Next.js Agent Rules`, `Memory-Aware Protocols`, `Claude Repository Commands`, `sanityFetch (Live Content API)`, `Raw Sanity Client` (+28 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 45`** (1 nodes): `Claude Repository Commands`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `Path Alias Configuration (@/*)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `Development Server Setup`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `Font Optimization with Geist`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `Deployment on Vercel`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `Tasks Placeholder`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `Document SVG Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `Globe SVG Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `Vercel Logo SVG`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `Window Icon SVG`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Architectural Decisions Registry` and `AlloyDB Adoption Hyperedge Description`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **Why does `Next.js 16 and Sanity v5 Architecture` connect `Community 0` to `Community 4`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `Architectural Decisions Registry` connect `Community 2` to `Community 3`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `Sanity Integration Data Flow` connect `Community 4` to `Community 0`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `ADR-001: Embed Sanity Studio Inside Next.js App` (e.g. with `Project Overview (Next.js 16 + Sanity v5)` and `Suggested Questions Section`) actually correct?**
  _`ADR-001: Embed Sanity Studio Inside Next.js App` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Next.js Agent Rules`, `Memory-Aware Protocols`, `Claude Repository Commands` to the rest of the system?**
  _33 weakly-connected nodes found - possible documentation gaps or missing edges._