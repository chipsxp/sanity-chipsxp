import { defineType, defineField } from 'sanity'

export const advertisingBlock = defineType({
  name: 'advertisingBlock',
  title: 'Advertising Block',
  type: 'object',
  fields: [
    defineField({
      name: 'promotionalImage',
      title: 'Promotional Image',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'affiliateLink',
      title: 'Affiliate Link',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    })
  ]
})
