import React, { useState } from 'react'
import logoImage from '../Images/logoImage.png'
import '../Styles/BookDemo.css'
import Footer from '../Header/Footer'
import { useNavigate } from 'react-router-dom'


const BookDemo = () => {

    const [isPopupOpen, setPopupOpen] = useState(false);

const togglePopup=()=>{
    setPopupOpen(!isPopupOpen)
}

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
                <div  id='form'>
                <label>Name</label>
        <input type='text ' placeholder='Name' name='Name'/>
        <label>E-Mail</label>
        <input type='text ' placeholder='E-Mail' name='E-Mail'/>
        
        <label>Age</label>
        <input type='text ' placeholder='Age' name='Age'/>
        <label>Company Name</label>
        <input type='text ' placeholder='Company Name' name='CompanyName'/>
        <label>EmployeeID</label>
        <input type='text ' placeholder='EmployeeID' name='EmployeeID'/>
        <label>PhoneNo</label>
        <input type='number ' placeholder='PhoneNo' name='PhoneNo'/>
        <label>Password</label>
        <input type='password ' placeholder='Password' name='username'/>
                <br/>
            {/* <iframe src=''/> */}
            <img src='' className='captcha'/>
            <br/>
            <button onClick={togglePopup} className='btn-modal'>Submit</button>

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
                <button className='btn-close' onClick={togglePopup}>Close</button>
                </div>

            </div>
}
        {/* <p>Forget Password</p>.......................................................................................... */}
               
               
                </div>
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