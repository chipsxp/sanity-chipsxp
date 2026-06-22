import { defineType, defineField } from 'sanity'

export const socialShareBlock = defineType({
  name: 'socialShareBlock',
  title: 'Social Share Block',
  type: 'object',
  fields: [
    defineField({
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform (e.g., Twitter, LinkedIn)', type: 'string' }),
            defineField({ name: 'url', title: 'Share URL (Optional override)', type: 'string' })
          ]
        }
      ]
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title Override',
      type: 'string',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description Override',
      type: 'text',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image Override',
      type: 'accessibleImage',
    })
  ]
})
