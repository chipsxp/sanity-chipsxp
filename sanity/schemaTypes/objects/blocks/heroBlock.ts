import { defineType, defineField } from 'sanity'

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'pitch',
      title: 'Pitch / Headline',
      type: 'string',
    }),
    defineField({
      name: 'answers',
      title: 'Answers / Subheadline',
      type: 'text',
    })
  ]
})
