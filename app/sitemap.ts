import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/app/utils/seo';
import { blogPosts } from '@/app/data/blogs';
import { testPageDataMap } from '@/app/data/test-page-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    '/',
    '/about',
    '/blog',
    '/innews',
    '/services',
    '/expertise',
    '/careers',
    '/contact',
    '/podcast',
    '/nuggets',
    '/speaking',
    '/privacy-policy',
    '/terms-of-use',
    '/case-studies',
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.7,
  }));

  const blogDetail = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const innewsDetail = blogPosts
    .filter((p) => p.categories.includes('Innews'))
    .map((post) => ({
      url: absoluteUrl(`/innews/${post.id}`),
      lastModified: new Date(post.createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const caseStudyDetail = Object.keys(testPageDataMap).map((slug) => ({
    url: absoluteUrl(`/case-studies/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogDetail, ...innewsDetail, ...caseStudyDetail];
}