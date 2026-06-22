import { defineType, defineField } from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary for listing pages.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'portableText',
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'authorName',
      media: 'coverImage'
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author && `by ${author}`,
        media
      }
    }
  }
})
