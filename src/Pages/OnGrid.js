import React, { useEffect, useState } from 'react'
import '../Styles/OnGrid.css'
import whyOngridWaiter from '../Images/whyOngridWaiter.jpg'
import whyOngridFactoryWorker from '../Images/whyOngridFactoryWorker.jpg'
import whyOngridConstructorWaiter from '../Images/whyOngridConstructor.jpg'
import SecurityGuards from '../Images/SecurityGuards.png'
import houseKeeping from '../Images/housekeeping.jpg'
import whyOngridArchitect from '../Images/whyOngridArchitect.jpg'
import whyOngridTaxiDriver from '../Images/whyOngridTaxiDriver.jpg'
import whyOngridCashier from '../Images/whyOngridCashier.jpg'
import whyOngridEngineer from '../Images/whyOngridEngineer.jpg'


const OnGrid = () => {

  
  const [item,setItem]=useState(0)
  const [item2,setItem2]=useState(0)
  const [item3,setItem3]=useState(0)
  

  const [changeImages]=useState([whyOngridWaiter,whyOngridFactoryWorker,whyOngridConstructorWaiter])
  const [changeImages2]=useState([SecurityGuards,houseKeeping,whyOngridArchitect])
  const [changeImages3]=useState([whyOngridTaxiDriver,whyOngridCashier,whyOngridEngineer])

  
  
  var [state,setState]=useState(['box9','boxnine','boxNine']);
  function get (){
    setInterval(()=>{
      if(state==="box9"){state="boxNine"}
      if(state==="boxNine"){state="boxnine"}
      if(state==="boxnine"){state="box9"}
    },3000)
  }
  
  var [state2,setState]=useState(['box3','boxThree','boxthree']);
  function get (){
    setInterval(()=>{
      if(state==="box3"){state="boxThree"}
      if(state==="boxThree"){state="boxthree"}
      if(state==="boxthree"){state="box3"}
    },3000)
  }
  // get()
  



try {
  useEffect(()=>{
    setInterval(()=>{
      setItem(item=>item <3 ? item +1 :0)
      setItem2(item2=>item2 <3 ? item2 +1 :0)
      setItem3(item3=>item3 <3 ? item3 +1 :0)
    
    },3000)
  },[])
} catch (error) {
  
}





  return (
    <div>
       <section className='Ongrid' >
    <div className='gridContainer text-center' >

    <h1>Why On Grid</h1>
    <div className='smallerBox'></div>
    <p>OnGrid is the fastest growing ISO-certified digital platform for background verifications and checks, serving over 2000+ clients, and having run over 100 million checks. OnGrid's advanced methodologies and proprietary algorithms across 50+ checks brings what you are really expecting from your BGV partner - high efficacy and accuracy, lesser TAT, lesser cost, and hassle-free experience for HR/TA or operations managers running the verification process.</p>
    </div>
<div>
    <div className='onGridContainer'>
      <div className='mainGrid' >
        <div id='Gridbox' className=' box1'>
          <img src='https://ongrid.in/images/home/leverage.png' style={{width:'33px',verticalAlign:'middle'}} alt='404'/>
          <br/>
          <b>Cutting edge approacch</b>
          <br/>
          <ul className='customBullets'>
            <li>State-of-art portal and APIs</li>
            <li>Pick and choose checks</li>
            <li>Digital candidate file created for compliance and audit</li>
            <li>Multi-modal information exchange options</li>
            <li>Multi-modal consent options</li>
          </ul>
        </div>
        <div id='Gridbox' className=' box2'>
          <img src='' alt=''/>
          <br/>
          <b>Comprehensive and Customizable Verification Solutions</b>
          <ul className='customBullets'>
            <li>ID and address verification</li>
            <li>Education and Employment verification</li>
            <li>Reference Checks</li>
            <li>Police and Court record verification</li>
            <li>Global database checks, credits checks</li>
          </ul>
        </div>
        <div id='Gridbox' className=' box3'>
          <img src={changeImages[item]} />
          
          {/* <img src=""  id='image1'/> */}
          {/* <img src="https://ongrid.in/images/home/whyOngridFactoryWorker.jpg" alt='404 error' id='image2'/>
          <img src="https://ongrid.in/images/home/whyOngridWaiter.jpg" alt='404 error' id='image3'/> */}
        </div>
       
        <div id='Gridbox' className=' box4'  >
          <img src={changeImages2[item2]}/>
        </div>
        <div id='Gridbox' className=' box5'>
          <img src={changeImages3[item3]}/>
        </div>
    
        <div id='Gridbox' className=' box6'>
          <img src='https://ongrid.in/images/home/crowdSourced.png' style={{width:'33px',verticalAlign:'middle'}} alt='404'/>
          <br/>
          <b>Asset-Reuse</b>
          <ul className='customBullets'>
            <li>Allows candidate to provide electronic consent to an employer or service provider to access her/his information, documents, verification reports, and references</li>
          </ul>
        </div>
       
        
      <div id='Gridbox' className=' box7'>
        <img src='https://ongrid.in/images/home/integrate.png' style={{width:'33px',verticalAlign:'middle'}} alt='404'/>
        <br/>
        <b>Partner of choice, fastes to reach</b>
        <ul className='customBullets'>
          <li>10 million+ people verified</li>
          <li>100 million+ checks conducted</li>
          <li>2000+ happy clients</li>
          <li>50+ configurable</li>
        </ul >
      </div>
      <div id='Gridbox' className=' box8'>
        <img src='https://ongrid.in/images/home/access.png' style={{width:'33px',verticalAlign:'middle'}} alt='404'/>
        <br/>
        <b>Access,Wherever,However</b>
        <ul className='customBullets'>
          <li>Unlimited organization users</li>
          <li>Intuitive portal access for real time verification updates</li>
          <li>Configure reports - who gets them, which reports, how frequently</li>
          <li>APIs for integrating with onboarding systems and HRMS 12X6 email and call support</li>
        </ul>
      </div>
      <div id='Gridbox' className={state[item]}>{console.log(state[item])}</div>
     
    </div>
    </div>
      </div>
    
  </section>



  </div>



  )
}

export default OnGrid