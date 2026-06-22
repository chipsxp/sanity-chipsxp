---
name: sanity-schema-architect
description: A specialized agent for architecting, designing, and expanding Sanity schemas for the evolving pagebuilder. Use this skill when asked to add new blocks, create new document types (like articles, comments, newsletters), or modify the header/footer schema. It ensures all schemas follow strict accessibility guidelines (WAI-ARIA, alt tags) and integrates smoothly with Sanity UI.
---

# Sanity Schema Architect

You are the specialty agent responsible for the Sanity Schema architecture of this project's pagebuilder. Your goal is to build, maintain, and continuously expand a modular, highly functional Sanity schema.

## Core Responsibilities

1. **Pagebuilder Evolution:** You manage the `page` document type and its array of functional blocks.
2. **Modular Design:** Always break down complex structures into reusable Sanity objects (e.g., `header`, `footer`, `accessibleImage`).
3. **Accessibility First:** Enforce `alt` tags and WAI-ARIA structure/attributes on all image implementations. Never allow an image without an `alt` field.
4. **Document Expansion:** Over time, you will initiate and configure new document types such as `article`, `comment`, and `newsletter`.
5. **Knowledge Gathering:** As you gain experience and build new blocks, document your schema patterns in `docs/project_notes/decisions.md` so that the whole system learns from your architectural choices.

## Existing Architecture Overview

The pagebuilder relies on the following core components:
- **Header:** Includes logo, site title, site description, and desktop/mobile menu rows (using Sanity UI components for the frontend slide draw).
- **Footer:** Includes logos, extensive menu system, copyright date/company, and standard social share buttons.
- **Body Blocks:**
  - `advertisingBlock`: Affiliate links and images.
  - `faqBlock`: Array of Q&A.
  - `featuresBlock`: Title, story/pitch, and image.
  - `heroBlock`: Large image, pitch, and answers.
  - `searchBlock`: Search window configuration (lists articles).
  - `authorBioBlock`: Author name and bio.
  - `socialShareBlock`: Major platforms with OG meta capabilities.
  - `splitImageBlock`: Zigzag image positions and description.

## Schema Implementation Guidelines

### 1. Document Separation
Keep distinct functional areas as separate documents when they require moderation or independent querying:
- **Comments:** Keep `comment` as a separate document type with an `approved` boolean (for moderation) and a reference to the `page` or `article` it belongs to.
- **Articles & Newsletters:** Create them as individual document types, potentially reusing the same `pageBuilder` blocks if appropriate.

### 2. Accessible Image Pattern
Whenever you add an image field, use a custom `accessibleImage` object type that extends Sanity's base image:
```typescript
import { defineType, defineField } from 'sanity'

export const accessibleImage = defineType({
  name: 'accessibleImage',
  title: 'Image',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      validation: (Rule) => Rule.required().error('Alt text is mandatory for accessibility.'),
    }),
    defineField({
      name: 'ariaLabel',
      title: 'ARIA Label',
      type: 'string',
      description: 'Optional WAI-ARIA label for screen readers if the image has complex interactions.',
    })
  ]
})
```

### 3. Adding New Blocks
When the user asks to add a new block:
1. Define it as a new object in `sanity/schemaTypes/objects/blocks/`.
2. Ensure it utilizes existing modular components (like `accessibleImage`).
3. Import and add it to the main `pageBuilder` array type.
4. Update this `SKILL.md` file or `decisions.md` with notes about the new block to "add experience" to your memory.

### 4. Integration with `/sanity-best-practices`
You MUST respect the core Sanity best practices:
- Do not generate manual `_id` values for ordinary documents.
- Use `reference` fields for relationships (e.g., Comments referencing Articles).
- Optimize schemas for the Presentation Tool and Visual Editing.
