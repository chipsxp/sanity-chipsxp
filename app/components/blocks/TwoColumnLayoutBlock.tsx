import { Grid, Box, Heading } from "@radix-ui/themes";
import { PAGE_QUERY_RESULT } from "../../../sanity.types";
import { PageBuilder } from "../PageBuilder";

type TwoColumnLayoutData = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["pageBuilder"]>[number],
  { _type: "twoColumnLayout" }
>;

// We extract the type that the PageBuilder expects
type PageBuilderBlocks = NonNullable<NonNullable<PAGE_QUERY_RESULT>["pageBuilder"]>;

export function TwoColumnLayoutBlock({ data }: { data: TwoColumnLayoutData }) {
  if (!data) return null;

  return (
    <Box className="w-full my-8">
      {data.title && (
        <Heading size="5" mb="6" className="sr-only">
          {data.title}
        </Heading>
      )}
      <Grid columns={{ initial: '1', md: '2' }} gap="6" width="auto">
        <Box className="flex flex-col gap-6">
          {data.leftColumn && data.leftColumn.length > 0 ? (
            <PageBuilder blocks={data.leftColumn as PageBuilderBlocks} />
          ) : (
            <div className="p-4 border border-dashed border-gray-200 text-gray-400 text-center h-full flex items-center justify-center min-h-[100px]">
              Left column empty
            </div>
          )}
        </Box>
        <Box className="flex flex-col gap-6">
          {data.rightColumn && data.rightColumn.length > 0 ? (
            <PageBuilder blocks={data.rightColumn as PageBuilderBlocks} />
          ) : (
            <div className="p-4 border border-dashed border-gray-200 text-gray-400 text-center h-full flex items-center justify-center min-h-[100px]">
              Right column empty
            </div>
          )}
        </Box>
      </Grid>
    </Box>
  );
}
