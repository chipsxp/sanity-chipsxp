import { type SchemaTypeDefinition } from 'sanity'
import { accessibleImage } from './objects/accessibleImage'
import { portableText } from './objects/portableText'
import { seo } from './objects/seo'
import { advertisingBlock } from './objects/blocks/advertisingBlock'
import { faqBlock } from './objects/blocks/faqBlock'
import { featuresBlock } from './objects/blocks/featuresBlock'
import { heroBlock } from './objects/blocks/heroBlock'
import { searchBlock } from './objects/blocks/searchBlock'
import { authorBioBlock } from './objects/blocks/authorBioBlock'
import { socialShareBlock } from './objects/blocks/socialShareBlock'
import { splitImageBlock } from './objects/blocks/splitImageBlock'
import { articleListBlock } from './objects/blocks/articleListBlock'
import { twoColumnLayout } from './objects/blocks/twoColumnLayout'
import { page } from './documents/page'
import { comment } from './documents/comment'
import { article } from './documents/article'
import { siteHeader } from './documents/siteHeader'
import { siteFooter } from './documents/siteFooter'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seo,
    twoColumnLayout,
    accessibleImage,
    portableText,
    advertisingBlock,
    faqBlock,
    featuresBlock,
    heroBlock,
    searchBlock,
    authorBioBlock,
    socialShareBlock,
    splitImageBlock,
    articleListBlock,
    page,
    comment,
    article,
    siteHeader,
    siteFooter
  ],
}
