import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import Faq from '../SinglePage/Faq'
import BookDemo from '../SinglePage/BookDemo'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
const AllRoutes = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/demo' element={<BookDemo/>}/>
        <Route path='/signIn' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AllRoutes