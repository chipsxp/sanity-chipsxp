import { defineType, defineField } from 'sanity'

export const siteHeader = defineType({
  name: 'siteHeader',
  title: 'Site Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Used to identify this header in the Studio (e.g., "Main Header" or "Landing Page Header").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: 'Choose a background color swatch for the header.',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      description: 'Choose a text color for the title and description to ensure good contrast.',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'accessibleImage',
      description: 'Upload a background image for the header.',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Upload a small square image (PNG or ICO) to be used as the browser tab icon. Great for holiday variations!',
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
