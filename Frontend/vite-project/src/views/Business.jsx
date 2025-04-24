import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Business = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/all/business");
        setArticles(res.data);
      } catch (error) {
        console.log(error.response?.data?.error || error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Top Business
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-13">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow duration-300"
          >
            {
              <img
                src={article.urlToImage ? article.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3uq9im2G10h8UASAFfN1uX7JvZ4tLZ-JlQ&s"}
                alt="Data"
                className="w-full h-48 object-cover"
              />
            }
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                {article.title}
              </h4>
              <p className="text-sm text-gray-600">
                {article.description || "No description available."}
              </p>
              <br />
              <p className="text-sm text-gray-600">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Business;
