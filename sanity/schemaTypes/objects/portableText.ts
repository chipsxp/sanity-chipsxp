import { defineType, defineArrayMember } from 'sanity'

export const portableText = defineType({
  name: 'portableText',
  type: 'array',
  title: 'Content',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ]
      }
    }),
    // Injecting our custom modular blocks inline
    defineArrayMember({ type: 'accessibleImage' }),
    defineArrayMember({ type: 'advertisingBlock' }),
    defineArrayMember({ type: 'splitImageBlock' }),
    defineArrayMember({ type: 'heroBlock' }),
    defineArrayMember({ type: 'featuresBlock' }),
  ]
})
