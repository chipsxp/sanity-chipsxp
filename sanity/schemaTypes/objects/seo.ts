import { defineType, defineField } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Override the default site title (ideal length: 50-60 characters)',
      validation: Rule => Rule.max(60).warning('Longer titles may be truncated by search engines')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'A brief summary of the page for search engine results (ideal length: 150-160 characters)',
      validation: Rule => Rule.max(160).warning('Longer descriptions may be truncated by search engines')
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image displayed when sharing the page on social media or in AI tools. Recommended size: 1200x630px',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      description: 'Turn this on to ask search engines NOT to index this page (adds noindex tag)',
      initialValue: false,
    })
  ]
})
