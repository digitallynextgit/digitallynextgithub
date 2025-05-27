'use client';

import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';
import { useState, useRef, useEffect } from 'react';
import { blogCategories, type BlogCategory, blogPosts } from '../../../../../data/blogs';
import { useRouter } from 'next/navigation';
import type { Editor } from 'tinymce';

export default function EditPost({ params }: { params: { id: string } }) {
  const router = useRouter();
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<BlogCategory[]>([]);
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setExcerpt(post.excerpt);
      setSelectedCategories(post.categories);
      setTags(post.tags.join(', '));
      setImage(post.image);
      if (editorRef.current) {
        editorRef.current.setContent(post.content);
      }
    }
  }, [post]);

  const handleCategoryChange = (category: BlogCategory) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategories.length === 0) {
      setError('Please select at least one category');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const content = editorRef.current?.getContent();
    const tagsArray = tags.split(',').map(tag => tag.trim()).filter(Boolean);
    
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();

    const updatedPost = {
      id: postId,
      title,
      slug,
      excerpt,
      content,
      image,
      date: post?.date || new Date().toISOString(),
      categories: selectedCategories,
      author: post?.author || 'IMET Global',
      tags: tagsArray
    };

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/dashboard/posts');
        router.refresh();
      } else {
        setError(data.error || 'Failed to update post');
      }
    } catch (error) {
      console.error('Error updating post:', error);
      setError('Failed to update post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categories
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {blogCategories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="rounded border-gray-300 text-red-700 focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
          {selectedCategories.length === 0 && (
            <p className="text-sm text-red-600 mt-1">Please select at least one category</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="tag1, tag2, tag3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image URL
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="/blog/image.webp"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <TinyMCEEditor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE}
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue={post.content}
            init={{
              height: 500,
              menubar: true,
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

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting || selectedCategories.length === 0}
            className={`bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors ${
              (isSubmitting || selectedCategories.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
