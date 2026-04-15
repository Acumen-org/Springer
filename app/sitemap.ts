import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://springer.capital';

  const staticRoutes = [
    '',
    '/about',
    '/career',
    '/contact',
    '/development',
    '/hospitality',
    '/logistics',
    '/mixed',
    '/multi',
    '/news',
    '/privacy',
    '/team',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return staticRoutes;
}
