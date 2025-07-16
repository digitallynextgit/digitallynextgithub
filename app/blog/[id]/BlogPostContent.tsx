'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { BlogPost } from '@/types/blog';

interface BlogPostContentProps {
    post: BlogPost;
    prevPost: BlogPost | null;
    nextPost: BlogPost | null;
    relatedPosts: BlogPost[];
}

export default function BlogPostContent({ 
    post, 
    prevPost, 
    nextPost,
    relatedPosts 
}: BlogPostContentProps) {
    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto py-12 lg:mt-[8vw] mt-[12vw]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <Sidebar />

                    {/* Main Content */}
                    <main className="flex-1">
                        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <h1 className="text-4xl font-bold p-10">{post.title}</h1>
                            
                            {/* Featured Image */}
                            {post.image && (
                                <div className="relative lg:h-[600px] w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={1200}
                                        height={100}
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            <div className="p-6">
                                {/* <h1 className="text-3xl font-bold mb-4">{post.title}</h1> */}
                                {/* <div className="text-gray-600 mb-4">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                    <span>By {post.author}</span>
                                </div>

                                {/* Categories */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.categories.map((category) => (
                                        <span
                                            key={category}
                                            className="px-3 py-1 bg-red text-white rounded-full text-sm"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>

                                {/* Content */}
                                <div 
                                    className="prose max-w-none mt-[7vw]"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* Additional Images */}
                                {/* {post.images && post.images.length > 0 && (
                                    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {post.images.map((image, index) => (
                                            <div key={index} className="relative h-48">
                                                <Image
                                                    src={image}
                                                    alt={`${post.title} - Image ${index + 1}`}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )} */}

                                {/* Tags */}
                                {post.tags && post.tags.length > 0 && (
                                    <div className="mt-8">
                                        <h3 className="text-lg font-semibold mb-2">Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </article>

                        {/* Navigation */}
                        <div className="flex justify-between mt-8">
                            {prevPost ? (
                                <Link
                                    href={`/blog/${prevPost.slug}`}
                                    className="flex items-center text-gray-600 hover:text-red"
                                >
                                    <span className="mr-2">←</span>
                                    Previous Post
                                </Link>
                            ) : (
                                <div />
                            )}
                            {nextPost ? (
                                <Link
                                    href={`/blog/${nextPost.slug}`}
                                    className="flex items-center text-gray-600 hover:text-red"
                                >
                                    Next Post
                                    <span className="ml-2">→</span>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.id}
                                            href={`/blog/${relatedPost.slug}`}
                                            className="block group"
                                        >
                                            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                                                {relatedPost.image && (
                                                    <div className="relative h-48">
                                                        <Image
                                                            src={relatedPost.image}
                                                            alt={relatedPost.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                )}
                                                <div className="p-4">
                                                    <h3 className="font-semibold mb-2 line-clamp-2">
                                                        {relatedPost.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm line-clamp-2">
                                                        {relatedPost.excerpt}
                                                    </p>
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
