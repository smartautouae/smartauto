// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/actions/blog' // adjust path if needed

const BASE_URL = 'https://smartautouae.ae'

const staticRoutes: {
  url: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}[] = [
  { url: '/',                                                          priority: 1.0, changeFrequency: 'weekly'  },
  { url: '/services',                                                  priority: 0.9, changeFrequency: 'weekly'  },
  { url: '/services/car-window-tinting-dubai-sharjah',                 priority: 0.9, changeFrequency: 'monthly' },
  { url: '/services/villa-window-tinting-dubai-sharjah',               priority: 0.9, changeFrequency: 'monthly' },
  { url: '/services/commercial-window-tinting-dubai-sharjah',          priority: 0.8, changeFrequency: 'monthly' },
  { url: '/services/paint-protection-film-dubai-sharjah',              priority: 0.9, changeFrequency: 'monthly' },
  { url: '/services/colour-ppf-dubai-sharjah',                         priority: 0.8, changeFrequency: 'monthly' },
  { url: '/services/nano-ceramic-coating-dubai-sharjah',               priority: 0.8, changeFrequency: 'monthly' },
  { url: '/services/car-detailing-polishing-dubai-sharjah',            priority: 0.8, changeFrequency: 'monthly' },
  { url: '/services/car-wrapping-dubai-sharjah',                       priority: 0.8, changeFrequency: 'monthly' },
  { url: '/services/switchable-smart-glass-film-dubai-sharjah',        priority: 0.8, changeFrequency: 'monthly' },
  { url: '/services/anti-shatter-film-safety-film',                    priority: 0.7, changeFrequency: 'monthly' },
  { url: '/services/surface-protection-film-dubai-sharjah',            priority: 0.7, changeFrequency: 'monthly' },
  { url: '/branches',                                                  priority: 0.9, changeFrequency: 'monthly' },
  { url: '/gallery',                                                   priority: 0.7, changeFrequency: 'weekly'  },
  { url: '/blog',                                                      priority: 0.8, changeFrequency: 'daily'   },
  { url: '/testimonials',                                              priority: 0.6, changeFrequency: 'weekly'  },
  { url: '/why-us',                                                    priority: 0.6, changeFrequency: 'monthly' },
  { url: '/contact',                                                   priority: 0.7, changeFrequency: 'monthly' },
  // /landing/* excluded — noindex
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── Static routes ──────────────────────────────────────────────────────
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ url, priority, changeFrequency }) => ({
      url:             `${BASE_URL}${url}`,
      lastModified:    new Date(),
      changeFrequency,
      priority,
    })
  )

  // ── Dynamic blog posts (published only) ────────────────────────────────
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await getPublishedPosts()
    blogEntries = posts.map((post) => ({
      url:             `${BASE_URL}/blog/${post.slug}`,
      lastModified:    new Date(post.updated_at),
      changeFrequency: 'weekly' as const,
      priority:        0.7,
    }))
  } catch (e) {
    console.error('sitemap: failed to fetch blog posts', e)
  }

  return [...staticEntries, ...blogEntries]
}