"use client";

import { useState } from "react";

const POSTS = [
  {
    id: 1,
    title: "Oral and dental health program for youth",
    category: "Health & fitness",
    published: "2025/01/18 at 6:40 pm",
  },
  {
    id: 2,
    title: "Tigers members attend first team training",
    category: "Health & fitness",
    published: "2025/01/18 at 11:40 pm",
  },
  {
    id: 3,
    title: " program for youth Health & fitness",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
  {
    id: 4,
    title: "Tigers members attend first team training",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
  {
    id: 5,
    title: " program for youth first team training",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
  {
    id: 6,
    title: "Oral and dental health program for youth",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
  {
    id: 7,
    title: "Tigers members attend first team training",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
];

export default function PostsPage() {
  const [search] = useState("");

  const filteredPosts = POSTS.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="  sm:p-6 bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className=" sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div className="flex justify-between">
          <h1 className="text-3xl pb-4">Posts</h1>
          <select className="border px-2  rounded-md text-sm">
            <option>Bulk actions</option>
            <option>Delete</option>
          </select>
        </div>
        <button className="bg-black text-white px-3 py-2 rounded w-full sm:w-auto">
          Add New Post
        </button>
        <p className="text-sm text-gray-500 pt-6">
          <span className="font-bold">Published (56) </span> Draft (12)
        </p>
      </div>

      {/* Controls */}
      <div className=" mb-4">
        <div className="flex flex-col gap-3 mb-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="border px-3 py-2 rounded text-sm w-full sm:w-64"
            />
            <button className="border px-4 py-2 rounded text-sm w-full sm:w-auto">Search</button>
          </div>

          <select className="border px-3 py-2 rounded-md text-sm">
            <option>Default sorting</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>

          <select className="border px-3 py-2 rounded-md text-sm">
            <option>Select category</option>
            <option>Health & fitness</option>
          </select>

          <select className="border px-3 py-2 rounded-md text-sm">
            <option>All dates</option>
            <option>January 2025</option>
          </select>

          <button className="border px-3 py-2 rounded-md text-sm">Filter</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3 w-10">
                <input type="checkbox" />
              </th>
              <th className="p-3">Title</th>
              <th className="p-3 hidden md:table-cell">Categories</th>
              <th className="p-3 hidden md:table-cell">Published</th>
              <th className="p-3 w-10"></th>
            </tr>
          </thead>

          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 border-b-8 border-gray-100 rounded-lg">
                <td className="p-3">
                  <input type="checkbox" />
                </td>

                <td className="p-5 font-medium">{post.title}</td>

                <td className="p-3 hidden md:table-cell text-gray-500">{post.category}</td>

                <td className="p-3 hidden md:table-cell text-gray-500">{post.published}</td>

                <td className="p-3 text-gray-400 cursor-pointer">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
