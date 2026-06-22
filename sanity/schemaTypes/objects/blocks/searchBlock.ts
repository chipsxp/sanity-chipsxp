import { defineType, defineField } from 'sanity'

export const searchBlock = defineType({
  name: 'searchBlock',
  title: 'Search Window Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'placeholderText',
      title: 'Placeholder Text',
      type: 'string',
    })
  ]
})
