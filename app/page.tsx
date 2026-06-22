import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY } from "@/sanity/lib/queries";
import { PageBuilder } from "./components/PageBuilder";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container, Heading, Text, Box } from "@radix-ui/themes";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: "home" },
    stega: false, // Critical: disable stega for metadata
  });

  if (!page) return {};

  const title = page.seo?.metaTitle || page.header?.siteTitle || page.title || "Sanity Pagebuilder";
  const description = page.seo?.metaDescription || page.header?.siteDescription || "Next.js frontend powered by Sanity";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: page.seo?.ogImage ? [{
        url: urlFor(page.seo.ogImage).width(1200).height(630).url(),
        width: 1200,
        height: 630,
      }] : [],
    },
    robots: page.seo?.noIndex ? "noindex" : "index, follow",
    icons: page.header?.favicon ? {
      icon: urlFor(page.header.favicon).width(32).height(32).url()
    } : undefined,
  };
}

export default async function HomePage() {
  // We fetch the document with slug 'home'
  const { data: page } = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: "home" },
  });

  if (!page) {
    return (
      <Container size="4" py="9" align="center">
        <Box className="text-center" style={{ textAlign: "center" }}>
          <Heading size="8" mb="4">Welcome to your Sanity Pagebuilder!</Heading>
          <Text size="5" color="gray">
            To see content here, create a new "Page" document in the Sanity Studio with the slug "home".
          </Text>
        </Box>
      </Container>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {page.header && <Header data={page.header} />}
      
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <PageBuilder blocks={page.pageBuilder || []} />
      </main>

      {page.footer && <Footer data={page.footer} />}
    </div>
  );
}
