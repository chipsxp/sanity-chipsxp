import { defineType, defineField } from 'sanity'

export const articleListBlock = defineType({
  name: 'articleListBlock',
  title: 'Article List Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Heading',
      type: 'string',
      initialValue: 'Recent Articles'
    }),
    defineField({
      name: 'limit',
      title: 'Number of articles to show',
      type: 'number',
      initialValue: 3
    })
  ]
})
