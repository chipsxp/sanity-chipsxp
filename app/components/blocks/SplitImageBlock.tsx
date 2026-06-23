import { Text, Container, Flex, Box } from "@radix-ui/themes";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERY_RESULT } from "@/sanity.types";

export type SplitImageBlockData = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["pageBuilder"]>[number],
  { _type: "splitImageBlock" }
>;

export function SplitImageBlock({ data }: { data: SplitImageBlockData }) {
  const imageUrl = data.image?.asset ? urlFor(data.image).url() : undefined;
  const isImageLeft = data.imagePosition === "left";

  const imageElement = imageUrl ? (
    <img 
      src={imageUrl} 
      alt={data.image?.alt || "Split Image"} 
      style={{ 
        width: "100%", 
        maxWidth: "500px", 
        borderRadius: "var(--radius-4)", 
        objectFit: "cover",
        display: "block",
        margin: "0 auto"
      }}
    />
  ) : undefined;

  return (
    <Box py="9">
      <Container size="4">
        <Flex direction={{ initial: "column", md: isImageLeft ? "row" : "row-reverse" }} gap="6" align="center">
          {imageElement && (
            <Box style={{ flex: 1, display: "flex", justifyContent: "center", width: "100%" }}>
              {data.linkUrl ? (
                <a href={data.linkUrl} target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", maxWidth: "500px" }}>
                  {imageElement}
                </a>
              ) : (
                <div style={{ width: "100%", maxWidth: "500px" }}>
                  {imageElement}
                </div>
              )}
            </Box>
          )}
          
          <Box flexShrink="0" style={{ flex: 1 }}>
            <Text size="6" color="gray" as="div" weight="bold">
              {data.description || "Missing Description"}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
