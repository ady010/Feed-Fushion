import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from '../views/Register'
import Login from '../views/Login'
import Feed from '../views/Feed'
import Blog from '@/views/Blog'
import Createblog from '@/views/Createblog'
import News from '@/views/News'
import Science from '@/views/Science'
import Tech from '@/views/Tech'

const routes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/register' element = {<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Feed/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/createBlog' element={<Createblog/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/science' element={<Science/>}/>
            <Route path='/tech' element={<Tech/>}/>
        </Routes>
    </Router>
  )
}

export default routes