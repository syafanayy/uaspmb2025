'use client';

import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/external/posts?limit=10');
        const data = await res.json();
        if (data.success) {
          setPosts(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Gagal fetch data');
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <p className="text-gray-600 mb-8">Data dari JSONPlaceholder API</p>

      {error ? (
        <div className="text-center py-8">
          <p className="text-red-600">Error: {error}</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 capitalize">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
              <div className="mt-4 text-sm text-gray-500">
                Post ID: {post.id} | User ID: {post.userId}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
