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
