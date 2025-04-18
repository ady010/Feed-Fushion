// import { url } from "inspector";
import React from "react";
import { useState, useEffect } from "react";

const Science = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY;
      const url = 
        "https://newsdata.io/api/1/latest?apikey=pub_811503f0b6f9343e5c2f19f8936488425db9b&category=science";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.results);
      } catch (error) {
        console.error("error fetching details", error);
      }  
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
  <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Science</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {articles.map((article, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow duration-300"
      >
        {article.image_url && (
          <img
            src={article.image_url}
            alt="News"
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-800">{article.title}</h4>
          <p className="text-sm text-gray-600">
            {article.description || "No description available."}
          </p>
        </div>
      </div>
    ))}
  </div>
</main>

  )
};

export default Science;
