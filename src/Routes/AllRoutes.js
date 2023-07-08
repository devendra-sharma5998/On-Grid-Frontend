import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import MainPage from '../Pages/MainPage'
import BookDemo from '../SinglePage/BookDemo'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import FAQs from '../Pages/FAQs'
import AboutUs from '../SinglePage/AboutUs'
import Carrers from '../SinglePage/Carrers'
import ContactUs from '../SinglePage/ContactUs'
import OurBlog from '../SinglePage/OurBlog'
import TnC from '../SinglePage/TnC'
import PrivacyPolicy from '../SinglePage/PrivacyPolicy'
const AllRoutes = () => {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/faq' element={<FAQs/>}/>
        <Route path='/demo' element={<BookDemo/>}/>
        <Route path='/signIn' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/carrers' element={<Carrers/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/ourBlog' element={<OurBlog/>}/>
        <Route path='/t&c' element={<TnC/>}/>
        <Route path='privacyPolicy' element={<PrivacyPolicy/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AllRoutes