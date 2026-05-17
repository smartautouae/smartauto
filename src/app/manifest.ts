import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Smart Auto UAE',
    short_name: 'Smart Auto',
    description: 'Dubai\'s most trusted car protection centre. Window tinting, PPF, ceramic coating and car wrapping.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0c0c',
    theme_color: '#C9A84C',
    orientation: 'portrait',
    icons: [
      { src: '/icons/icon-192.png',  sizes: '192x192',  type: 'image/png' },
      { src: '/icons/icon-512.png',  sizes: '512x512',  type: 'image/png' },
      { src: '/icons/icon-512.png',  sizes: '512x512',  type: 'image/png', purpose: 'maskable' },
    ],
  }
}