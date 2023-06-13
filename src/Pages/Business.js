import React, { useEffect, useState } from 'react'
import '../Styles/Business.css'
// import children from '../Images/children.jpg'

const Business = () => {

const [state,setState]=useState(false)
const [state2,setState2]=useState(false)
const [state3,setState3]=useState(false)
const [state4,setState4]=useState(false)
const [state5,setState5]=useState(false)
const [state6,setState6]=useState(false)
const [state7,setState7]=useState(false)
const [state8,setState8]=useState(false)
const [state9,setState9]=useState(false)

useEffect(()=>{

},[state])

function fee(){
  console.log(" business pop")
  if(state===false){
    return ('business popUp-none')
  }else if(state==true){
    return ('business popUp-block')
  }
}
function fee2(){
  if(state2===false){
    return ('business popUp-none')
  }else if(state2==true){
    return ('business popUp-block')
  }
}
function fee3(){
  if(state3===false){
    return ('business popUp-none')
  }else if(state3==true){
    return ('business popUp-block')
  }
}
function fee4(){
  if(state4===false){
    return ('business popUp-none')
  }else if(state4==true){
    return ('business popUp-block')
  }
}
function fee5(){
  if(state5===false){
    return ('business popUp-none')
  }else if(state5==true){
    return ('business popUp-block')
  }
}
function fee6(){
  if(state6===false){
    return ('business popUp-none')
  }else if(state6==true){
    return ('business popUp-block')
  }
}
function fee7(){
  if(state7===false){
    return ('business popUp-none')
  }else if(state7==true){
    return ('business popUp-block')
  }
}
function fee8(){
  if(state8===false){
    return ('business popUp-none')
  }else if(state8==true){
    return ('business popUp-block')
  }
}
function fee9(){
  if(state9===false){
    return ('business popUp-none')
  }else if(state9==true){
    return ('business popUp-block')
  }
}



  return (
    <div id='BusinessMainContainer'>
       <h1>Businesses</h1>
       <br/>
      <p>OnGrid provides comprehensive background verification services that can be customized to any requirement for any industry. Every business has a different purpose for verification and
        <br/>
         compliance, and hence we offer tailor-made solutions for your unique background check needs."</p>
      <br/>
      <br/>
      <br/>
      <section >


<div id='Business-Container' >
  <div className='business-contain-box'>
  <div id='BusinessBox' className='businessBox1'onClick={()=>setState(true)} >
    {/* <img src=''/> */}
   
   <h1 className='item1' > Education/EdTech </h1>
   
  </div>
  <div id='BusinessBox'  className='businessBox2'>
    <h1 className='item2'>Staffing</h1>

    </div>
  <div id='BusinessBox' className='businessBox3' >
   <h1 className='item3'> Transportation,Logistics eCommerce</h1>
    </div>
    <div id='BusinessBox' className='businessBox4'>
  <h1 className='item4'>Banking,Financial Services,Incurance and Fin-Tech</h1>
  </div>
  <div id='BusinessBox' className='businessBox5'>
    <h1 className='item5'>Retail,Hospitality,F&B</h1>
  </div>
  <div id='BusinessBox' className='businessBox6'>
  <h1 className='item6'>Manufacturing</h1>

  </div>
  <div id='BusinessBox' className='businessBox7'>
  <h1 className='item7'>It/Ites</h1>

  </div>
  <div id='BusinessBox' className='businessBox8'>
  <h1 className='item8'>Healthcare</h1>

  </div>
  <div id='BusinessBox' className='businessBox9'>
  <h1 className='item9'>Internet Platforms</h1>
  </div>
</div>
  

{/* popup section */}
<div className={fee()}>
<div className='popup-item1'>
<div className='container'>
<div className='business-head'>
<h1>Education/EdTech</h1>
<h3>With the rise in demand, organizations in the Education and EdTech sector are on a hiring spree. The primary users of your service or platform are students, and their safety and learning outcomes are of paramount importance. BGV thus ensures the quality of new hires - tutors, administrative staff, or sales staff, thus helping towards a productive and safe learning environment.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
</div>

</div>
</div>


  
</div>
  <br/>
  <br/>
  <button className='actionButton' style={{border:'none'}}>Get Started</button>
  <br/>
  <br/>
  



</section>






    </div>
  )
}

export default Business