/* eslint-disable */
// @ts-nocheck

import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/data/blogs';
import BlogPostContent from '@/app/blog/[id]/BlogPostContent';
import type { Metadata } from 'next';
import Script from 'next/script';
import { buildMetadata, newsArticleJsonLd } from '@/app/utils/seo';

export default function NewsPost({ params }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));
  
  // Get related news posts (other posts in the Innews category)
  const relatedPosts = blogPosts
    .filter(p => 
      p.id !== parseInt(params.id) && 
      p.categories.includes('Innews')
    )
    .slice(0, 3);

  // Get next and previous news posts
  // const currentIndex = blogPosts.findIndex(p => p.id === parseInt(params.id));
  const newsPosts = blogPosts.filter(p => p.categories.includes('Innews'));
  const currentNewsIndex = newsPosts.findIndex(p => p.id === parseInt(params.id));
  
  const prevPost = currentNewsIndex > 0 ? newsPosts[currentNewsIndex - 1] : null;
  const nextPost = currentNewsIndex < newsPosts.length - 1 ? newsPosts[currentNewsIndex + 1] : null;

  if (!post || !post.categories.includes('Innews')) {
    notFound();
  }

  return (
    <>
      <Script id="ld-news-article" type="application/ld+json">
        {JSON.stringify(
          newsArticleJsonLd({
            title: post.title,
            description: post.excerpt || (post.content || '').replace(/<[^>]+>/g, '').slice(0, 200),
            path: `/innews/${post.id}`,
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
  const post = blogPosts.find((p) => p.id === parseInt(params.id));
  if (!post || !post.categories.includes('Innews')) return {};
  const description = post.excerpt || (post.content || '').replace(/<[^>]+>/g, '').slice(0, 200);
  const keywords = Array.from(new Set([...(post.categories || []), ...(post.tags || [])]));
  return buildMetadata({
    title: `${post.title} | DigitallyNext News`,
    description,
    path: `/innews/${post.id}`,
    keywords,
    images: post.image ? [post.image] : undefined,
  });
}
