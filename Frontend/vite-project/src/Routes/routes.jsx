import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from '../views/Users/Register'
import Login from '../views/Users/Login'
import Feed from '../views/Feed'
import Blog from '@/views/Blogs/Blog'
import Createblog from '@/views/Blogs/Createblog'
import News from '@/views/News'
import Science from '@/views/Science'
import Tech from '@/views/Tech'
import Sports from '@/views/Sports'
import Business from '@/views/Business'
import Interests from '../views/Users/Interests'

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
            <Route path='/sports' element={<Sports/>}/>
            <Route path='/business' element={<Business/>}/>
            <Route path='/interest' element={<Interests/>}/>

        </Routes>
    </Router>
  )
}

export default routes