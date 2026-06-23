import { PAGE_QUERY_RESULT } from "../../sanity.types";
import { HeroBlock } from "./blocks/HeroBlock";
import { FeaturesBlock } from "./blocks/FeaturesBlock";
import { TwoColumnLayoutBlock } from "./blocks/TwoColumnLayoutBlock";
import { SplitImageBlock } from "./blocks/SplitImageBlock";

type PageBuilderProps = {
  blocks: NonNullable<NonNullable<PAGE_QUERY_RESULT>["pageBuilder"]>;
};

type BlockType = NonNullable<NonNullable<PAGE_QUERY_RESULT>["pageBuilder"]>[number];

export function PageBuilder({ blocks }: PageBuilderProps) {
  if (!blocks || blocks.length === 0) return <></>;

  return (
    <div className="flex flex-col gap-12">
      {blocks.map((block: BlockType, index: number) => {
        switch (block._type) {
          case "heroBlock":
            return <HeroBlock key={block._key || index} data={block} />;
          case "featuresBlock":
            return <FeaturesBlock key={block._key || index} data={block} />;
          case "twoColumnLayout":
            return <TwoColumnLayoutBlock key={block._key || index} data={block} />;
          case "splitImageBlock":
            return <SplitImageBlock key={block._key || index} data={block} />;
          case "articleListBlock":
            return (
              <div key={block._key || index} className="p-4 border border-dashed border-gray-400 text-gray-500 text-center">
                Article List Block (Title: {block.title}, Limit: {block.limit}) - Implementation pending article queries
              </div>
            );
          // Other blocks like faqBlock, advertisingBlock, etc. will go here
          default:
            return (
              <div key={block._key || index} className="p-4 border border-dashed border-gray-400 text-gray-500 text-center">
                Unhandled block component: {block._type}
              </div>
            );
        }
      })}
    </div>
  );
}
