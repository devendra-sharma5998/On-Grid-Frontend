import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/NavBars.css";
import { Link, useNavigate } from "react-router-dom";

import logoImage from "../Images/logoImage.png";
import Faq from "../SinglePage/Faq";

const Navbar = () => {
  const Navigate = useNavigate();

  const navigate = useNavigate();

  const handle = () => {
    navigate("/Faq");
  };

  function demoFun() {
    const ab = localStorage.getItem("token");
    // console.log(ab)
    if (ab) {
      Navigate("/demo");
    } else {
      alert("You are Not login! Login First ");
      Navigate("/SignIn");
    }
  }

  function logFun(){
    const c=localStorage.getItem('token')
    if(c){
      Navigate('/')
      // document.getElementById('navSignIn').style.visibility='none'
    }else{
      
      Navigate('/SignIn')
    }
    // if(cd){
    //   Navigate('/')
    // }else{
    //   Navigate('/SignIn')
    // }
  }

function handleHome(){
  Navigate("/")
}

  return (
    <>
      <div className="navbar">
        {/* <nav ref={navRef}> */}
        <ul>
          <li>
            <img style={{height:'100%'}} onClick={()=>handleHome()} src={logoImage} alt="404" />
          </li>

<div className="nav" style={{position:'relative',display:'inline-block',paddingLeft:'35px'}}>

          <li onClick={()=>handleHome()}>Home</li>
          <li onClick={() => window.scrollTo({ top: 840, behavior: "smooth" })}>
            {" "}
            WhyOnGrid{" "}
          </li>

          <li
            onClick={() => window.scrollTo({ top: 1800, behavior: "smooth" })}
            >
            OurOfferings
          </li>
          <li
            onClick={() => window.scrollTo({ top: 2450, behavior: "smooth" })}
            >
            Business
          </li>

          <li onClick={() => handle()}>FAQs</li>
            </div>
        </ul>
        {/* </nav> */}

        <ul style={{ marginRight: "10px", marginTop: "0" }}>
          {/* <Link to='/bookDemo'> */}
          <li>
            <button className="btn" onClick={demoFun}>
              Book a Demo
            </button>
          </li>
          {/* </Link> */}
          <li onClick={() => logFun()}id="navSignIn">sign in</li>
        </ul>

        {/* <button onClick={showNavbar}>
  <FaTimes/>
</button>

<button className="nav-btn" onClick={showNavbar}>
  <FaBars/>
</button> */}
      </div>
    </>
  );
};

export default Navbar;
