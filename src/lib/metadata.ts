import { createClient } from '@supabase/supabase-js'
import type { Metadata } from 'next'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function buildMetadata(
  route: string,
  fallback: { title: string; description: string }
): Promise<Metadata> {
  // Fetch from Supabase first
  const { data } = await supabase
    .from('seo_pages')
    .select('*')
    .eq('route', route)
    .single()

  const title       = data?.title       || fallback.title
  const description = data?.description || fallback.description
  const canonical   = data?.canonical   || `https://smartautouae.ae${route}`
  const robots      = data?.robots      || 'index, follow'
  const ogImage     = data?.og_image    || '/images/og-default.jpg'

  return {
    title,
    description,
    keywords:  data?.keywords  || undefined,
    robots,
    alternates: { canonical },
    openGraph: {
      title:       data?.og_title       || title,
      description: data?.og_description || description,
      url:         canonical,
      type:        (data?.og_type as 'website' | 'article') || 'website',
      images:      [{ url: ogImage, width: 1200, height: 630 }],
      siteName:    'Smart Auto UAE',
    },
    twitter: {
      card:        (data?.twitter_card as 'summary_large_image' | 'summary') || 'summary_large_image',
      title:       data?.twitter_title       || data?.og_title       || title,
      description: data?.twitter_description || data?.og_description || description,
      images:      [data?.twitter_image || ogImage],
    },
  }
}