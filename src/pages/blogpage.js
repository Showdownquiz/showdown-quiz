import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Tips for Quiz Preparation",
      category: "tips",
      date: "November 28, 2024",
      author: "Sarah Johnson",
      excerpt: "Master the art of quiz preparation with these proven strategies...",
      readTime: "5 min read",
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "History Quiz Techniques",
      category: "strategies",
      date: "November 25, 2024",
      author: "Mike Peterson",
      excerpt: "Learn effective techniques for remembering historical dates and events...",
      readTime: "7 min read",
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "Science Quiz Resources",
      category: "resources",
      date: "November 22, 2024",
      author: "Dr. Emily Clark",
      excerpt: "Discover the best online resources for science quiz preparation...",
      readTime: "6 min read",
      image: "/api/placeholder/800/400"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Quiz Resources & Tips</h1>
          <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
            Discover articles, guides, and resources to enhance your quizzing skills
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setSelectedCategory('all')}
                className={
                  selectedCategory === 'all'
                    ? "px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-l-lg"
                    : "px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 rounded-l-lg"
                }
              >
                All Posts
              </button>
              <button
                onClick={() => setSelectedCategory('tips')}
                className={
                  selectedCategory === 'tips'
                    ? "px-4 py-2 text-sm font-medium bg-blue-600 text-white"
                    : "px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
                }
              >
                Tips
              </button>
              <button
                onClick={() => setSelectedCategory('strategies')}
                className={
                  selectedCategory === 'strategies'
                    ? "px-4 py-2 text-sm font-medium bg-blue-600 text-white"
                    : "px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
                }
              >
                Strategies
              </button>
              <button
                onClick={() => setSelectedCategory('resources')}
                className={
                  selectedCategory === 'resources'
                    ? "px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-r-lg"
                    : "px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 rounded-r-lg"
                }
              >
                Resources
              </button>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">By {post.author}</div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest quiz tips, strategies, and resources delivered directly to your inbox.
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-gray-300 shadow-sm p-2"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;