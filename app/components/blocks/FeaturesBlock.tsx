import { Heading, Text, Container, Card, Inset } from "@radix-ui/themes";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERY_RESULT } from "@/sanity.types";

export type FeaturesBlockData = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["pageBuilder"]>[number],
  { _type: "featuresBlock" }
>;

export function FeaturesBlock({ data }: { data: FeaturesBlockData }) {
  const imageUrl = data.featureImage?.asset ? urlFor(data.featureImage).url() : null;

  return (
    <Container size="3" py="7">
      <Card size="4">
        {imageUrl && (
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src={imageUrl}
              alt={data.featureImage?.alt || "Feature image"}
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 300,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
        )}
        <Heading size="6" mb="2">
          {data.title || "Feature Title"}
        </Heading>
        <Text as="p" size="3" color="gray">
          {data.storyPitch || "Feature pitch goes here..."}
        </Text>
      </Card>
    </Container>
  );
}
