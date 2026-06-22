import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all published pages that do not have noIndex set to true
  const pages = await client.fetch(`
    *[_type == "page" && defined(slug.current) && seo.noIndex != true]{
      "url": select(
        slug.current == "home" => "/",
        "/" + slug.current
      ),
      _updatedAt
    }
  `)

  // In production, you would use process.env.NEXT_PUBLIC_SITE_URL or similar
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  return pages.map((page: { url: string, _updatedAt: string }) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page._updatedAt),
  }))
}
