/* eslint-disable */
// @ts-nocheck
import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/data/blogs';
import BlogPostContent from './BlogPostContent';
import type { Metadata } from 'next';
import Script from 'next/script';
import { buildMetadata, articleJsonLd } from '@/app/utils/seo';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const id = params.id;
  const post = blogPosts.find((post) => post.slug === id);
  
  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === id);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3); // Get up to 3 related posts

  return (
    <>
      <Script id="ld-blog-article" type="application/ld+json">
        {JSON.stringify(
          articleJsonLd({
            title: post.title,
            description: post.excerpt || (post.content || '').replace(/<[^>]+>/g, '').slice(0, 200),
            path: `/blog/${post.slug}`,
            image: post.image,
            datePublished: post.createdAt,
            authorName: post.author,
            tags: post.tags,
          })
        )}
      </Script>
      <BlogPostContent
        post={post}
        prevPost={prevPost}
        nextPost={nextPost}
        relatedPosts={relatedPosts}
      />
    </>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.id);
  if (!post) return {};
  const description = post.excerpt || (post.content || '').replace(/<[^>]+>/g, '').slice(0, 200);
  const keywords = Array.from(new Set([...(post.categories || []), ...(post.tags || [])]));
  return buildMetadata({
    title: `${post.title} | DigitallyNext Blog`,
    description,
    path: `/blog/${post.slug}`,
    keywords,
    images: post.image ? [post.image] : undefined,
  });
}
