// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/landing/'],
      },
    ],
    sitemap: 'https://smartautouae.ae/sitemap.xml',
  }
}