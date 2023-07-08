import React, { useEffect, useState } from 'react'
import Navbar from '../Header/Navbar'
import '../Styles/SignUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../Header/Footer'

const SignUp = () => {

const navigate=useNavigate()

const loginIn=()=>{
  navigate('/signIn')
}



  const [state,setState]=useState({
    Name:'',
    EMail:'',
    CompanyName:'',
    EmployeeId:'',
    PhoneNo:'',
    Password:''
  })

  const handleChange=(e)=>{
    setState({...state,
    [e.target.name]:e.target.value
    })
  }

  const handleClick=async()=>{
    console.log("data")
console.log(state)
    const {data} = await axios.post("http://localhost:8001/register",{state});
    console.log(data)
    if(data){
      localStorage.setItem("token",data.token);
      navigate("/")
    }else{
      alert("Try Again")
    }

    
  }
 




  return (
    <>
    <Navbar/>
    <div className='SignUp'>
      <div className='flexItem'>
        <label>Name</label>
        <input type='text 'value={state.Name} onChange={handleChange} placeholder='Input Name' name='Name' required/>
        <label>EMail</label>
        <input type='text ' value={state.EMail} onChange={handleChange} placeholder='Input Email' name='EMail'/>
        
        {/* <label>Age</label>
        <input type='text' value={state.Age} onChange={handleChange} placeholder='Input Username' name='Age'/> */}
        <label>Company Name</label>
        <input type='text' value={state.CompanyName} onChange={handleChange} placeholder='Input Company Name' name='CompanyName'/>
        <label>EmployeeID</label>
        <input type='text' value={state.EmployeeId} onChange={handleChange} placeholder='Input Employee Id' name='EmployeeId'/>
        <label>PhoneNo</label>
        <input type='number' value={state.PhoneNo} onChange={handleChange} placeholder='Input Phone No' name='PhoneNo'/>
        <label>Password</label>
        <input type='password ' value={state.Password} onChange={handleChange} placeholder='Input Password' name='Password'/>

        <button onClick={()=>handleClick()}>Submit</button>

        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',padding:'10px'}}>
        <p>Already have an Account click here</p>
<button onClick={()=>loginIn()}>Sign In</button>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp