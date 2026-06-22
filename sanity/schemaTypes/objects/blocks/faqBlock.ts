import { defineType, defineField } from 'sanity'

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text' })
          ]
        }
      ]
    })
  ]
})
