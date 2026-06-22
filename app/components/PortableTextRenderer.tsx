import { PortableText, PortableTextReactComponents, PortableTextTypeComponentProps } from '@portabletext/react'
import { HeroBlock, HeroBlockData } from './blocks/HeroBlock'
import { FeaturesBlock, FeaturesBlockData } from './blocks/FeaturesBlock'
import { ARTICLE_QUERY_RESULT, AccessibleImage } from '@/sanity.types';

const components: Partial<PortableTextReactComponents> = {
  types: {
    heroBlock: ({ value }: PortableTextTypeComponentProps<HeroBlockData>) => <HeroBlock data={value} />,
    featuresBlock: ({ value }: PortableTextTypeComponentProps<FeaturesBlockData>) => <FeaturesBlock data={value} />,
    accessibleImage: ({ value }: PortableTextTypeComponentProps<AccessibleImage>) => (
      <div style={{ margin: '2rem 0' }}>
        {/* We would render image properly here */}
        [Image: {value?.alt || 'No alt text'}]
      </div>
    ),
    advertisingBlock: () => <div>[Advertising Block]</div>,
    splitImageBlock: () => <div>[Split Image Block]</div>,
  },
}

type ArticleBody = NonNullable<ARTICLE_QUERY_RESULT>["body"];

export function PortableTextRenderer({ value }: { value: ArticleBody }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />
}
