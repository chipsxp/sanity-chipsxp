import { defineType, defineField } from 'sanity'

export const authorBioBlock = defineType({
  name: 'authorBioBlock',
  title: 'Author Bio Block',
  type: 'object',
  fields: [
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'accessibleImage',
    })
  ]
})
