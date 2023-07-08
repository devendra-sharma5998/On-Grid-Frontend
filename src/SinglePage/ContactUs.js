import React from 'react'
import '../Styles/ContactUs.css'
import ContactImage from '../Images/ContactImage.png'
import Navbar from '../Header/Navbar'
import Footer from '../Header/Footer'

const ContactUs = () => {
  return (
    <div>
      <Navbar/>
            <img className='contact-image' src={ContactImage}/>
        <hr style={{backgroundColor:'rgb(51,204,204)',height:"5px",marginTop:'-4px'}}/>
        <section className='contact-main-container'>
          <div className='contact-container'>
          <h1>Business Enquiry? Bugs? Catch up for tea?</h1>
        <label>Name</label>
        <input type='text'  placeholder='Input Company Name' name='CompanyName'/>
        <label>email</label>
        <input type='text' placeholder='Input Employee Id' name='EmployeeId'/>
        <label>PhoneNo</label>
        <input type='number' placeholder='Input Phone No' name='PhoneNo'/>
        </div>

    <div className='contact-container' style={{marginRight:'25%',marginTop:'-1%'}}>
      <h3>Address</h3>
      <h4>Handy Online Solutions Private Limited</h4>
      <div>ThinkPlus, 18B, Institutional Area <br/>
Opposite Eli Lilly and Company<br/>
Sector 32, Gurugram, Haryana - 122003</div>
<br/>

    <img src='https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg' style={{height:'200px'}}/>
    </div>

        </section>
        <br/>
        <br/>
<Footer/>
    </div>
  )
}

export default ContactUs