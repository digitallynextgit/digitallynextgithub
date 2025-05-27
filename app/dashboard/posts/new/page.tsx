'use client';

import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';
import { useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { blogCategories } from "@/app/data/blogs";
import { BlogCategory } from "@/types/blog";
import type { Editor } from 'tinymce';
import Image from 'next/image';

export default function NewPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<BlogCategory[]>(["Latest"]);
  const [tags, setTags] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(null);
  const [, setAdditionalImages] = useState<string[]>([]);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const editorRef = useRef<Editor | null>(null);

  const handleCategoryChange = (category: BlogCategory) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleFeaturedImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setFeaturedImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload featured image
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', 'featured');
    formData.append('title', title || 'blog');

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setFeaturedImage(data.imagePath);
        setError('');
      } else {
        setError(data.error || 'Failed to upload featured image');
      }
    } catch (err) {
      console.error('Error uploading featured image:', err);
      setError('Failed to upload featured image');
    }
  };

  const handleAdditionalImagesUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Validate files
    const invalidFiles = files.filter(file => !file.type.startsWith('image/'));
    if (invalidFiles.length > 0) {
      setError('Please upload only image files');
      return;
    }

    // Create previews
    for (const file of files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdditionalImagePreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }

    // Upload additional images
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', 'additional');
      formData.append('title', title || 'blog');

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          setAdditionalImages(prev => [...prev, data.imagePath]);
          setError('');
        } else {
          setError(data.error || 'Failed to upload additional image');
        }
      } catch (err) {
        console.error('Error uploading additional image:', err);
        setError('Failed to upload additional image');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategories.length === 0) {
      setError("Please select at least one category");
      return;
    }

    if (!featuredImage) {
      setError("Please upload a featured image for the blog post");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const content = editorRef.current?.getContent();
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");

    const postData = {
      title,
      slug,
      excerpt,
      content,
      image: featuredImage,
      categories: selectedCategories,
      tags: tagsArray,
      author: "Digitally next",
      date: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString()
    };

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      
      if (data.success) {
        // Clear form and redirect to posts list
        setTitle("");
        setExcerpt("");
        setSelectedCategories(["Latest"]);
        setTags("");
        setFeaturedImage("");
        setFeaturedImagePreview(null);
        setAdditionalImages([]);
        setAdditionalImagePreviews([]);
        editorRef.current?.setContent("");
        router.push("/dashboard/posts");
      } else {
        setError(data.error || "Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setError("Failed to create post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      {/* Excerpt */}
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full p-2 border rounded-md"
          rows={3}
          required
        />
      </div>

      {/* Featured Image Upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Featured Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFeaturedImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {featuredImagePreview && (
          <div className="mt-2">
            <Image
              src={featuredImagePreview}
              alt="Featured image preview"
              width={200}
              height={200}
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Additional Images Upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Additional Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleAdditionalImagesUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {additionalImagePreviews.length > 0 && (
          <div className="mt-2 grid grid-cols-3 gap-4">
            {additionalImagePreviews.map((preview, index) => (
              <Image
                key={index}
                src={preview}
                alt={`Additional image ${index + 1}`}
                width={150}
                height={150}
                className="object-cover rounded-lg"
              />
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div>
        <label className="block text-sm font-medium mb-2">Categories</label>
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategories.includes(category)
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium mb-2">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="tag1, tag2, tag3"
        />
      </div>

      {/* Content Editor */}
      <div>
        <label className="block text-sm font-medium mb-2">Content</label>
        <TinyMCEEditor
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue text-white px-6 py-2 rounded-md hover:bg-red/80 disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create Post"}
        </button>
      </div>
    </form>
  );
}
