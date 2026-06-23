import { Text, Container, Flex, Box } from "@radix-ui/themes";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERY_RESULT } from "@/sanity.types";

export type SplitImageBlockData = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["pageBuilder"]>[number],
  { _type: "splitImageBlock" }
>;

export function SplitImageBlock({ data }: { data: SplitImageBlockData }) {
  const imageUrl = data.image?.asset ? urlFor(data.image).url() : null;
  const isImageLeft = data.imagePosition === "left";

  return (
    <Box py="9">
      <Container size="4">
        <Flex direction={{ initial: "column", md: isImageLeft ? "row" : "row-reverse" }} gap="6" align="center">
          {imageUrl && (
            <Box style={{ flex: 1 }}>
              <img 
                src={imageUrl} 
                alt={data.image?.alt || "Split Image"} 
                style={{ width: "100%", borderRadius: "var(--radius-4)", objectFit: "cover" }}
              />
            </Box>
          )}
          
          <Box flexShrink="0" style={{ flex: 1 }}>
            <Text size="5" color="gray" as="div">
              {data.description || "Missing Description"}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
