import { defineType, defineField } from 'sanity'

export const siteFooter = defineType({
  name: 'siteFooter',
  title: 'Site Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Used to identify this footer in the Studio (e.g., "Main Footer").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: 'Choose a background color swatch for the footer.',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      description: 'Choose a text color for the footer text to ensure good contrast.',
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'logos',
      title: 'Partner / Sponsor Logos',
      type: 'array',
      of: [{ type: 'accessibleImage' }]
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
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
