import React from "react";

interface BlogPost {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: "Design.png", 
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: "Product.png", 
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: "SoftwareEngineering.png", 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-10 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-red-500">Our blog</h2>
          <h3 className="text-2xl font-bold">Latest blog posts</h3>
          <p className="text-gray-600">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="px-6 py-2 bg-red-500 text-white rounded">
          View all posts
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-medium text-red-500">{post.category}</p>
              <h4 className="text-lg font-semibold mt-2">{post.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              <div className="flex items-center mt-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with author's avatar
                  alt={post.author}
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3 text-sm">
                  <p className="font-medium">{post.author}</p>
                  <p className="text-gray-500">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
