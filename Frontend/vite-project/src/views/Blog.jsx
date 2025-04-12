import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
const navigate = useNavigate()

  const clickHandler = ()=>{
    navigate("/createBlog")
  }
  return (

    <main>
      <header className='p-3'>
        <h1>Blogs</h1>
        <button onClick={clickHandler} className='bg-black/70 hover:bg-black/90 text-white font-bold py-1 px-1 rounded-md transition' >Create Blogs</button>
      </header>
      <div className="Blogs">
      </div>
    </main>
  )
}

export default Blog