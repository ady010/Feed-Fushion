import React, { useEffect } from 'react'
import { useState } from 'react'


const News = () => {
    const [articles, setArticles] = useState([])

    
    useEffect(() => {
        
        const fetchNews = async ()=>{
            const apikey = import.meta.env.VITE_NEWSORG_API_KEY
            const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c493382f783c405598156fa11829f9e6"

            try{
                const response = await fetch(url)
                const data = await response.json()
                setArticles(data.articles)
            }
            catch (error){
                console.error('Error fetching news', error)
            }
        }
        fetchNews()
    }, [])
    

  return (
    <main className="max-w-5xl mx-auto py-8">
    <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">📰 Top Headlines</h2>
  
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-13">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow duration-300"
        >
          {(
            <img
              src={article.urlToImage}
              alt="News"
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">{article.title}</h4>
            <p className="text-sm text-gray-600">
              {article.description || "No description available."}
            </p>
            <br />
            <p className="text-sm text-gray-600">
                {article.content} 
            </p>
          </div>
        </div>
      ))}
    </div>
  </main>
  
  )
}

export default News