import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from '../views/Register'
import Login from '../views/Login'
import Feed from '../views/Feed'

const routes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/register' element = {<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/feed' element={<Feed/>}/>
        </Routes>
    </Router>
  )
}

export default routes