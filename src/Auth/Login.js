import React from 'react'
import '../Styles/Login.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validation from './Validation'
import Navbar from '../Header/Navbar'

const Login = () => {

  const Navigate = useNavigate();

  function signUp(){
    Navigate('/SignUp')
  }

  
  const [detail,setDetail]=useState({
    Email:"",
    Password:""
  })
  const [error,setError]=useState({})

const handleChange=(e)=>{
  setDetail({...detail,
  [e.target.name]:e.target.value})
}

const handleClick=async()=>{
console.log(detail,"sending state")
  const {data}=await axios.post('http://localhost:8001/login',{ detail  })
  console.log(data)
  if(data){
    localStorage.setItem("token",data.token);
    Navigate("/")
  }else{
    alert("Try Again")
  }
  
}

const handleValidation=(e)=>{
  e.preventDefault()
  setError(validation(detail))
}


  return (
<>
    <Navbar/>

    <div className='login-container'>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <div className='main-login-container'> */}
      {/* <hr/> */}
<div className='login-Item'>
  <div style={{backgroundColor:'#34d0d0',color:'white'}}>

      <h1>Sign-in on OnGrid</h1>
      <p>View, Add, Manage individuals in your community</p>
      <hr style={{width:'100%'}}/>
  </div>
      <form onSubmit={handleValidation}>
<label>E-Mail</label>
<input type='text' placeholder='Enter Your E-mail' name='Email' onChange={handleChange}  required    />
{error.email && <p>{error.email}</p>}
{/* <p>Email can't be empty</p>: ""} */}
<label>Password</label>
<input type='password' placeholder='Enter Your Password' name='Password' onChange={handleChange} required/>
{error.Password && <p>{error.Password}</p>}

{/* <p>Email can't be empty</p> */}


<br/>
<br/>
<div >
<button onClick={handleClick} className='login-btn'>Submit</button>
  <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',padding:'10px'}}>

  <p>Don't have an account SignUp here</p> 
  <button onClick={()=>signUp()} className='login-btn'>SignUp</button>
  </div>
</div>
    </form>
</div>
</div>
   
    </>
  )
}

export default Login