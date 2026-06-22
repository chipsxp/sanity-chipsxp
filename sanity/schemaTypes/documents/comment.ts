import { defineType, defineField } from 'sanity'

export const comment = defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Comments must be approved before they are public.',
      initialValue: false,
    }),
    defineField({
      name: 'page',
      title: 'Page Reference',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'The page or article this comment belongs to.',
    })
  ],
  preview: {
    select: {
      title: 'authorName',
      subtitle: 'content',
      approved: 'approved'
    },
    prepare({ title, subtitle, approved }) {
      return {
        title: `${title} ${approved ? '(Approved)' : '(Pending)'}`,
        subtitle
      }
    }
  }
})
