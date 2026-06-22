import { Heading, Text, Container, Flex, Box } from "@radix-ui/themes";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERY_RESULT } from "@/sanity.types";

export type HeroBlockData = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["pageBuilder"]>[number],
  { _type: "heroBlock" }
>;

export function HeroBlock({ data }: { data: HeroBlockData }) {
  const imageUrl = data.heroImage?.asset ? urlFor(data.heroImage).url() : null;

  return (
    <Box py="9" style={{ backgroundColor: "var(--accent-a3)" }}>
      <Container size="4">
        <Flex direction={{ initial: "column", md: "row" }} gap="6" align="center">
          <Box flexShrink="0" style={{ flex: 1 }}>
            <Heading size="9" mb="4">
              {data.pitch || "Missing Pitch"}
            </Heading>
            <Text size="5" color="gray">
              {data.answers || "Missing Answers/Subheadline"}
            </Text>
          </Box>
          
          {imageUrl && (
            <Box style={{ flex: 1 }}>
              <img 
                src={imageUrl} 
                alt={data.heroImage?.alt || "Hero Image"} 
                style={{ width: "100%", borderRadius: "var(--radius-4)", objectFit: "cover" }}
              />
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
}
