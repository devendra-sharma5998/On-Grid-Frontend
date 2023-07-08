import React from 'react'

import '../Styles/Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
        <div id='footer'>
            <div className='box'>
           <div className='text1'><h2>Connect with us</h2>
           <br/>
          
           </div>
           <div className='text2'>
            <h2>Company</h2>
            <ul>
            <Link onClick={()=>window.scrollTo({top:'0', behavior:'smooth'})} style={{textDecoration:'none',color:'white'}} to='/aboutUs'>  <li>About Us</li></Link>
             <Link onClick={()=>window.scrollTo({top:'0', behavior:'smooth'})} style={{textDecoration:'none',color:'white'}} to='/carrers'><li>Carrers</li></Link>
             <Link onClick={()=>window.scrollTo({top:'0', behavior:'smooth'})} style={{textDecoration:'none',color:'white'}} to='/contactUs'><li>Contact us</li></Link>
             <Link onClick={()=>window.scrollTo({top:'0', behavior:'smooth'})} style={{textDecoration:'none',color:'white'}} to='/ourBlog'><li>Our Blog</li></Link>
             <Link onClick={()=>window.scrollTo({top:'0', behavior:'smooth'})} style={{textDecoration:'none',color:'white'}} to='/t&c'><li>Terms and conditions</li></Link>
             <Link onClick={()=>window.scrollTo({top:'0', behavior:'smooth'})} style={{textDecoration:'none',color:'white'}} to='/privacyPolicy'><li>Privacy Policy</li></Link>
            </ul>
            </div>
            </div> 
            
        </div>
        <div className='line'>
    {/* <hr></hr> */}
    <hr/>
    © 2023 ONGRID - A brand of Handy Online Solutions Private Limited
        </div>



    </div>
  )
}

export default Footer