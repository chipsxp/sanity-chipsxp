import { defineType, defineField } from 'sanity'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'menuLinks',
      title: 'Menu Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'string' })
          ]
        }
      ]
    })
  ]
})
