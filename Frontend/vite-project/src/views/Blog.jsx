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
    <main>
      <header className="p-3">
        <h1>Blogs</h1>
        <button
          onClick={clickHandler}
          className="bg-black/70 hover:bg-black/90 text-white font-bold py-1 px-1 rounded-md transition"
        >
          Create Blogs
        </button>
      </header>
      <div className="Blogs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {data?.blogs?.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={blog.image}
              alt="Blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {blog.title}
              </h2>
              <p className="text-gray-700 text-sm">{blog.content}</p>
              <h3 className="text-sm text-gray-500 mb-2">by {blog.author}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
