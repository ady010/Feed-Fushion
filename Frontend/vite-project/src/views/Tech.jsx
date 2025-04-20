import React from "react";
import { useState, useEffect } from "react";

const Tech = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_NEWSORG_API_KEY;
      const url =
        "https://newsapi.org/v2/everything?q=ai&from=2025-04-18&to=2025-04-18&sortBy=popularity&apiKey=c493382f783c405598156fa11829f9e6";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("error fetching details", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Tech
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow duration-300"
          >
            {(
              <img
                src={article.urlToImage}
                alt="Tech"
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                {article.title}
              </h4>
              <p className="text-sm text-gray-600">
                {article.description || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tech;

// import { url } from "inspector";
