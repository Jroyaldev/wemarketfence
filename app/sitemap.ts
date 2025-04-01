import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wemarketfence.com'
  
  // Define your static routes
  const routes = [
    '',
    '/process',
    '/our-work',
    '/work',
    '/contact',
    '/services',
    '/about',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return routes
}
