import React, { useEffect, useState } from 'react'
import logoImage from '../Images/logoImage.png'
import '../Styles/BookDemo.css'
import Footer from '../Header/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const BookDemo = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const [state,setState]=useState({
        name:'',
        email:'',
        organisationName:'',
        age:'',
        phoneNo:'',
        onGrid:''
    })

   const handleChange=((e)=>{
    setState({...state,
    [e.target.name]:e.target.value
    })
   }) 

const handleClick=async()=>{
    const {data}=await axios.post('http://localhost:8001/registerdData',{state})
    console.log(data)
    setPopupOpen(!isPopupOpen)
}
    

// This code for to active popUp Modal or Remove

if(isPopupOpen){
    document.body.classList.add('active-modal')
}else{
    document.body.classList.remove('active-modal')
}

const navigate=useNavigate()


function foo(){
    localStorage.removeItem("token")
    navigate('/')
}

  return (
    <>
    <div>
        <section id='BookDemoSection'>
        <div style={{margin:'1% 7%'}}>
        <img className='logo' src={logoImage} alt="404" />
        <button className='logout' onClick={()=>foo()}>Logout</button>
        </div>

        <div className='main-container'>
            <div className='container'>
                <div className='item'>
                <h3>Ensure HR complicance across organisation</h3>
                <ul>
                    <li>Clients can send invites to candidates for self registration and creating their record, reducing HR/Ops work significantly.</li>
                    <li>Integration of the client user/customer onboarding system or HRMS with OnGrid APIs.</li>
                    <li>Pick and choose from 50+ verifications and background checks across staff categories.</li>
                    <li>Reduced TAT and cost of background verifications, basic verification in less than 4 hours, including instant checks.</li>
                    <li>Employee onboarding, covering digital collection of data, documents, and consent.</li>
                    <li>Trusted by 2000+ clients.</li>
                </ul>
                </div>
                <form >
                <div  id='form'>
                <label>Name</label>
        <input type='text ' value={state.name} onChange={handleChange} placeholder='Name' name='name' required/>
        <label>E-Mail</label>
        <input type='text '  value={state.email} onChange={handleChange} placeholder='E-Mail' name='email' required/>
        
        <label>Age</label>
        <input type='text ' value={state.age} onChange={handleChange} placeholder='Age' name='age' required/>
        <label>Organisation Name</label>
        <input type='text ' value={state.organisationName} onChange={handleChange} placeholder='organisation Name' name='organisationName' required/>
       
        <label>PhoneNo</label>
        <input type='number '  value={state.phoneNo} onChange={handleChange} placeholder='PhoneNo' name='phoneNo' required/>
        <label>How did You learn about OnGrid</label>
        {/* <input type='text '  placeholder='Please Select' name='OnGrid' required/> */}
           <select  value={state.onGrid} onChange={handleChange} placeholder='select states' name='onGrid' style={{width:'315px',height:'90px',borderRadius:'10px',border:'2px solid black',textAlign:'center'}}>
          <option label='Please Select'  >Please Select</option>
            <option >google search</option>
            <option value='Media article'>Media article</option>
            <option value='Linkedin post'>Linkedin post </option>
            <option value='OnGrid Blog'>OnGrid Blog</option>
            <option value='Received an email from OnGrid'>Received an email from OnGrid</option>
            <option value='Referred by an existing OnGrid client'>Referred by an existing OnGrid client</option>
            <option value='Referred by a friend'>Referred by a friend</option>
            <option value='I have used ONGrid before'>I have used ONGrid before</option>
            <option value='Other'>Other</option>
            </select>
                <br/>
            {/* <iframe src=''/> */}
            <img src='' className='captcha'/>
            <br/>
            <button onClick={handleClick}   className='btn-modal'>Submit</button>

            {isPopupOpen &&

            <div className='modal'>
                <div className='overlay'></div>
                <div className='modal-content'>
                    {/* <div className='modal-img'></div> */}
                    <img className='modal-img' src='https://js.hsformsqa.net/success-green.svg' alt='404'/>
                    <br/>
<h1>Thank you for getting in touch! We appreciate you contacting us.</h1>
<br/>
<h1>One of our colleagues will get in touch with you soon!</h1>
<br/>
<h1>Have a great day!</h1>
                <button className='btn-close' onClick={handleClick}>Close</button>
                </div>

            </div>
}
        {/* <p>Forget Password</p>.......................................................................................... */}
               
               
                </div>
                </form>
            </div>

            <div className='companies'>
                <div>
                    <h3>Incredible companies working with OnGrid</h3>

    <div className='brandsName'>
        <div className='brand'>
            <img src='https://ongrid.in/images/home/logo/unacademy.png' alt='404 error'/>
        </div>
        <div className='brand'>
            <img src='https://ongrid.in/images/home/logo/grofers.png' alt='404 error'/>
        </div>
        <div className='brand'>
            <img src='https://ongrid.in/images/home/logo/reliance.png' alt='404 error'/>
        </div>
        <div className='brand'>
            <img src='https://ongrid.in/images/home/logo/nobroker.png' alt='404 error'/>
        </div>
        <div className='brand'>
            <img src='https://ongrid.in/images/home/logo/delhivery.png' alt='404 error'/>
        </div>
        <div className='brand'>
            <img src='https://ongrid.in/images/home/logo/ola.png' alt='404 error'/>
        </div>
    </div>

                </div>
        </div>
            </div>

        </section>

    </div>
        <Footer/>
        </>
  )
}

export default BookDemo