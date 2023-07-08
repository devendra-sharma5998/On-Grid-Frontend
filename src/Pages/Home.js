import React from 'react'
import heroImage2 from '../Images/heroImage2.jpg'
import '../Styles/Header.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate=useNavigate()

const loginIn=()=>{
  const a=localStorage.getItem('token')
  if(a){
    navigate('/')
  }else{
    navigate('/signIn')
  }
}


  return (
    <div >
        <section id='header'>
        <img src={heroImage2}/>
        <div id='introText'>
        <h1>DIGITAL TRUST PLATFORM</h1>
        "Empowering employers and service providers through comprehensive identity and background 
        <br/>
        verifications for ensuring trust and accountability, and for achieving HR/ISO compliance."
        <br/>
        <br/>
        <button className='actionButton' onClick={()=>loginIn()} >Get Started</button>
        </div>
        </section>
        <section id='UsersScopes'>
          <div className='container text-center'>
            <p className='longPara'>"Millions of people are a step away from entering the formal digital economy. They will need access to formal services such as jobs, education, healthcare, loans, insurance products, house/vehicle on rent, etc. This transformation is possible with employers and service providers being able to establish trust through identity and background verifications. OnGrid offers 50+ background checks, and also leverages a repository of verified information in a secure locker, with the consent of an individual, for achieving this."</p>
          </div>
        </section>


    </div>
  )
}

export default Home