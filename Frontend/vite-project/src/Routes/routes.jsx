import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from '../Components/Register'
import Login from '../Components/Login'
import Feed from '../Components/Feed'

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