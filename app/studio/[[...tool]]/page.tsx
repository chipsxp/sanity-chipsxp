/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { metadata as studioMetadata, viewport } from 'next-sanity/studio'
import { client } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { Metadata } from 'next'

export const dynamic = 'force-static'

export { viewport }

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(PAGE_QUERY, { slug: "home" })
  const favicon = page?.header?.favicon 
    ? urlFor(page.header.favicon).width(32).height(32).url() 
    : undefined;

  return {
    ...studioMetadata,
    ...(favicon ? { icons: { icon: favicon } } : {}),
  }
}

export default function StudioPage() {
  return <NextStudio config={config} />
}
