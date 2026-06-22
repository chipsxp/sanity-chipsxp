import { defineType, defineField } from 'sanity'

export const twoColumnLayout = defineType({
  name: 'twoColumnLayout',
  title: 'Two Column Layout',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Used to identify this block in the Studio (e.g. "Main Content and Sidebar")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'leftColumn',
      title: 'Left Column',
      type: 'array',
      of: [
        { type: 'advertisingBlock' },
        { type: 'faqBlock' },
        { type: 'featuresBlock' },
        { type: 'searchBlock' },
        { type: 'authorBioBlock' },
        { type: 'socialShareBlock' },
        { type: 'articleListBlock' },
      ]
    }),
    defineField({
      name: 'rightColumn',
      title: 'Right Column',
      type: 'array',
      of: [
        { type: 'advertisingBlock' },
        { type: 'faqBlock' },
        { type: 'featuresBlock' },
        { type: 'searchBlock' },
        { type: 'authorBioBlock' },
        { type: 'socialShareBlock' },
        { type: 'articleListBlock' },
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Two Column Layout',
        subtitle: '50/50 Split Grid'
      }
    }
  }
})
