import React from 'react'
import '../Styles/Login.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const Navigate = useNavigate();

  function signUp(){
    Navigate('/SignUp')
  }

  const [error,setError]=useState(false)
 
const [detail,setDetail]=useState({
  Email:"",
  Password:""
})

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




  return (
    <div className='login-container'>
      {/* <form onSubmit={handleSubmit}> */}
<div className='login-Item'>
<label>E-Mail</label>
<input type='text' placeholder='Enter Your E-mail' name='Email' onChange={handleChange} required/>
{error?
<p>Email can't be empty</p>: ""}
<label>Password</label>
<input type='password' placeholder='Enter Your Password' name='Password' onChange={handleChange} required/>
<p>Email can't be empty</p>


<br/>
<br/>
<div >
<button onClick={handleClick}>Submit</button>
  <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',padding:'10px'}}>

  <p>Don't have an account SignUp here</p> 
  <button onClick={()=>signUp()}>SignUp</button>
  </div>
</div>
</div>
    {/* </form> */}
    </div>
  )
}

export default Login