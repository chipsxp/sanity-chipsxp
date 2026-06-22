import { defineType, defineField } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
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
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
    defineField({
      name: 'header',
      title: 'Header Configuration',
      type: 'reference',
      to: [{ type: 'siteHeader' }],
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        { type: 'twoColumnLayout' },
        { type: 'advertisingBlock' },
        { type: 'faqBlock' },
        { type: 'featuresBlock' },
        { type: 'heroBlock' },
        { type: 'searchBlock' },
        { type: 'authorBioBlock' },
        { type: 'socialShareBlock' },
        { type: 'splitImageBlock' },
        { type: 'articleListBlock' }
      ]
    }),
    defineField({
      name: 'footer',
      title: 'Footer Configuration',
      type: 'reference',
      to: [{ type: 'siteFooter' }],
    })
  ]
})
