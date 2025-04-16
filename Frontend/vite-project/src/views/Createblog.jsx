import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createblog = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:3000/blog/create",
        {
          image,
          title,
          content
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(res)
      navigate("/blog");
    } catch (error) {
      if (error.response?.data?.errors) {
        setError(error.response.data.errors);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };
  return (
    <main onSubmit={submitHandler} className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <form className="bg-white shadow-xl rounded-lg px-10 py-8 w-full max-w-xl border border-gray-200">
        <h1 className="text-3xl font-semi-bold mb-6 text-gray-800 text-center font-serif">
          New Blog Post
        </h1>

        <label className="block text-gray-700 font-medium mb-1">
          Image URL
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="w-full px-4 py-2 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <label className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your blog title"
          className="w-full px-4 py-2 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <label className="block text-gray-700 font-medium mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your thoughts here..."
          rows="6"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Publish
        </button>
      </form>

      {error.length > 0 && (
        <div className="mt-6 w-full max-w-xl bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {error.map((err, index) => (
              <li key={index}>{err.msg}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Createblog;
