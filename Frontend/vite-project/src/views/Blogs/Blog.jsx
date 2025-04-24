import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/createBlog");
  };

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/blog/getBlogs", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error.response?.data?.error || error);
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-50">
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Blogs</h1>
      <button
        onClick={clickHandler}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Create Blog
      </button>
    </header>
  
    <section className="Blogs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.blogs?.map((blog, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img
            src={blog.image}
            alt="Blog"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {blog.title}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-3">
              {blog.content}
            </p>
            <span className="text-sm text-gray-500 italic">by {blog.user}</span>
          </div>
        </div>
      ))}
    </section>
  </main>
  
  );
};

export default Blog;
