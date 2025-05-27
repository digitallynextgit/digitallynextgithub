import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { blogPosts } from "@/app/data/blogs";
import { BlogPost } from "@/types/blog";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = parseInt(params.id);
    const postIndex = blogPosts.findIndex((post) => post.id === postId);

    if (postIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    // Remove the post from the array
    blogPosts.splice(postIndex, 1);

    // Update the blogs.ts file
    const blogsFilePath = path.join(process.cwd(), "data", "blogs.ts");
    const fileContent = `import { BlogPost } from '../types/blog';

export const blogCategories = [
  'NotToMiss',
  'Blog',
  'Digital Media',
  'IoT',
  'Press Release'
] as const;

export type BlogCategory = typeof blogCategories[number];

export const blogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};`;

    await fs.writeFile(blogsFilePath, fileContent, "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete post" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = parseInt(params.id);
    const postIndex = blogPosts.findIndex((post) => post.id === postId);

    if (postIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    const updatedPost: BlogPost = await request.json();

    // Update the post in the array
    blogPosts[postIndex] = updatedPost;

    // Update the blogs.ts file
    const blogsFilePath = path.join(process.cwd(), "data", "blogs.ts");
    const fileContent = `import { BlogPost } from '../types/blog';

export const blogCategories = [
  'Blog',
  'Featured',
  'Latest',
  'Innews'
] as const;

export type BlogCategory = typeof blogCategories[number];

export const blogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};`;

    await fs.writeFile(blogsFilePath, fileContent, "utf-8");

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update post" },
      { status: 500 }
    );
  }
}
