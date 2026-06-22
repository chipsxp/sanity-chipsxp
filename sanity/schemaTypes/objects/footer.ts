import { defineType, defineField } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{ type: 'accessibleImage' }]
    }),
    defineField({
      name: 'menuLinks',
      title: 'Footer Menu Links',
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
    }),
    defineField({
      name: 'copyrightYear',
      title: 'Copyright Year',
      type: 'string',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'socialShare',
      title: 'Social Share Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform Name', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'string' })
          ]
        }
      ]
    })
  ]
})
