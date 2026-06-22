import { defineType, defineField } from 'sanity'

export const featuresBlock = defineType({
  name: 'featuresBlock',
  title: 'Features Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'storyPitch',
      title: 'Story or Pitch',
      type: 'text',
    }),
    defineField({
      name: 'featureImage',
      title: 'Feature Image',
      type: 'accessibleImage',
    })
  ]
})
