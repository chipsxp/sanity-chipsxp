import { defineType, defineField } from 'sanity'

export const splitImageBlock = defineType({
  name: 'splitImageBlock',
  title: 'Split Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' }
        ],
        layout: 'radio'
      },
      initialValue: 'left'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
      description: 'Optional URL to make the image clickable'
    })
  ]
})
