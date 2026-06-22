import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import { PortableTextRenderer } from "@/app/components/PortableTextRenderer";
import { Container, Heading, Text, Box } from "@radix-ui/themes";

const ARTICLE_QUERY = defineQuery(`
  *[_type == "article" && slug.current == $slug][0] {
    title,
    authorName,
    publishedAt,
    excerpt,
    body
  }
`);

// Workaround for Next.js 15+ param type requirements
type Params = { slug: string };

export default async function ArticlePage(props: { params: Promise<Params> }) {
  const params = await props.params;
  const { data: article } = await sanityFetch({
    query: ARTICLE_QUERY,
    params: { slug: params.slug },
  });

  if (!article) {
    return (
      <Container size="3" py="9" align="center">
        <Heading>Article not found</Heading>
      </Container>
    );
  }

  return (
    <Container size="3" py="9">
      <Box mb="6">
        <Heading size="9" mb="2">{article.title}</Heading>
        <Text size="4" color="gray">
          By {article.authorName || "Anonymous"} • {new Date(article.publishedAt || "").toLocaleDateString()}
        </Text>
      </Box>
      <Box className="prose dark:prose-invert max-w-none">
        <PortableTextRenderer value={article.body} />
      </Box>
    </Container>
  );
}
