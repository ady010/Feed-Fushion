import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Sports = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/all/sports");
        setArticles(response.data);
      } catch (error) {
        console.log(error.response?.data?.error || error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Top Sports Headlines
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-13">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow duration-300"
          >
            {
              <img
                src={article.urlToImage}
                alt="News"
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

export default Sports;
