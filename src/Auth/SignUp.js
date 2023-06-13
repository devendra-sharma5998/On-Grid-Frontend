import React, { useEffect, useState } from 'react'
import Navbar from '../Header/Navbar'
import '../Styles/SignUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

const navigate=useNavigate()

const loginIn=()=>{
  navigate('/signIn')
}



  const [state,setState]=useState({
    Name:'',
    EMail:'',
    // Age:'',
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

    // try {
      
    //   // await axios.post('http://localhost:5001/register',{
    //   await axios.post('http://localhost:5001/',{
    //   state
    // }).then((res)=>{
    //   console.log(res)
    //   // console.log(data)
    // })
    // } catch (error) {
    //   console.log(error.message)
    // }
  //  const {data}=await axios.post('http://localhost:5001/register',{state})
  }
 




  return (
    <>
    {/* <Navbar/> */}
    <div className='SignUp'>
      <div className='flexItem'>
        <label>Name</label>
        <input type='text 'value={state.Name} onChange={handleChange} placeholder='Input Username' name='Name'/>
        <label>EMail</label>
        <input type='text ' value={state.EMail} onChange={handleChange} placeholder='Input Username' name='EMail'/>
        
        {/* <label>Age</label>
        <input type='text' value={state.Age} onChange={handleChange} placeholder='Input Username' name='Age'/> */}
        <label>Company Name</label>
        <input type='text' value={state.CompanyName} onChange={handleChange} placeholder='Input Username' name='CompanyName'/>
        <label>EmployeeID</label>
        <input type='text' value={state.EmployeeId} onChange={handleChange} placeholder='Input Username' name='EmployeeId'/>
        <label>PhoneNo</label>
        <input type='number' value={state.PhoneNo} onChange={handleChange} placeholder='Input Username' name='PhoneNo'/>
        <label>Password</label>
        <input type='password ' value={state.Password} onChange={handleChange} placeholder='Input Username' name='Password'/>

        <button onClick={handleClick}>Submit</button>

        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',padding:'10px'}}>
        <p>Already have an Account click here</p>
<button onClick={()=>loginIn()}>Sign In</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default SignUp