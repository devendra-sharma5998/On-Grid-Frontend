import React, { useEffect, useState } from 'react'
import '../Styles/Business.css'
// import {BsFillFilePersonFill} from 'react-icons/Fa'
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
    return ('popUp popUp-none')
  }else if(state==true){
    return ('popUp popUp-block')
  }
}
function fee2(){
  if(state2===false){
    return ('popUp popUp-none')
  }else if(state2==true){
    return ('popUp popUp-block')
  }
}
function fee3(){
  if(state3===false){
    return ('popUp popUp-none')
  }else if(state3==true){
    return ('popUp popUp-block')
  }
}
function fee4(){
  if(state4===false){
    return ('popUp popUp-none')
  }else if(state4==true){
    return ('popUp popUp-block')
  }
}
function fee5(){
  if(state5===false){
    return ('popUp popUp-none')
  }else if(state5==true){
    return ('popUp popUp-block')
  }
}
function fee6(){
  if(state6===false){
    return ('popUp popUp-none')
  }else if(state6==true){
    return ('popUp popUp-block')
  }
}
function fee7(){
  if(state7===false){
    return ('popUp popUp-none')
  }else if(state7==true){
    return ('popUp popUp-block')
  }
}
function fee8(){
  if(state8===false){
    return ('popUp popUp-none')
  }else if(state8==true){
    return ('popUp popUp-block')
  }
}
function fee9(){
  if(state9===false){
    return ('popUp popUp-none')
  }else if(state9==true){
    return ('popUp popUp-block')
  }
}



  return (
    <div id='BusinessMainContainer'>
      <div className='business-head'>

       <h1>Businesses</h1>
       <br/>
      <p>OnGrid provides comprehensive background verification services that can be customized to any requirement for any industry. Every business has a different purpose for verification and
        <br/>
         compliance, and hence we offer tailor-made solutions for your unique background check needs."</p>
      <br/>
      <br/>
      <br/>
      </div>
      <section >


<div id='Business-Container' >
  <div className='business-contain-box'>
  <div id='BusinessBox' className='businessBox1'onClick={()=>setState(true)} >
    {/* <img src=''/> */}
   
   <h1 className='item1' > Education/EdTech </h1>
   
  </div>
  <div id='BusinessBox'  className='businessBox2' onClick={()=>setState2(true)}>
    <h1 className='item2'>Staffing</h1>

    </div>
  <div id='BusinessBox' className='businessBox3' onClick={()=>setState3(true)} >
   <h1 className='item3'> Transportation,Logistics eCommerce</h1>
    </div>
    <div id='BusinessBox' className='businessBox4' onClick={()=>setState4(true)}>
  <h1 className='item4'>Banking,Financial Services,Incurance and Fin-Tech</h1>
  </div>
  <div id='BusinessBox' className='businessBox5' onClick={()=>setState5(true)}>
    <h1 className='item5'>Retail,Hospitality,F&B</h1>
  </div>
  <div id='BusinessBox' className='businessBox6' onClick={()=>setState6(true)}>
  <h1 className='item6'>Manufacturing</h1>

  </div>
  <div id='BusinessBox' className='businessBox7' onClick={()=>setState7(true)}>
  <h1 className='item7'>It/Ites</h1>

  </div>
  <div id='BusinessBox' className='businessBox8' onClick={()=>setState8(true)}>
  <h1 className='item8'>Healthcare</h1>

  </div>
  <div id='BusinessBox' className='businessBox9' onClick={()=>setState9(true)}>
  <h1 className='item9'>Internet Platforms</h1>
  </div>
  

{/* popup section */}

{/* pop up 1 */}

<div className={fee()} >
  <div style={{width:'95%',height:"100%",marginLeft:'4%',marginRight:'4%',display:'flex'}}>
<div className='popup-item1' style={{backgroundColor:'black'}}>
<div className='container' style={{backgroundColor:'black'}}>
<div className='business-head'style={{backgroundColor:'black',width:'100%'}} >
<h1>Education/EdTech</h1>
<h3>With the rise in demand, organizations in the Education and EdTech sector are on a hiring spree. The primary users of your service or platform are students, and their safety and learning outcomes are of paramount importance. BGV thus ensures the quality of new hires - tutors, administrative staff, or sales staff, thus helping towards a productive and safe learning environment.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
<div style={{display:'flex',flexDirection:'column',position:'relative',height:'100%',backgroundColor:'rgb(7, 115, 115)'}}>
<div>
{/* <BsFillFilePersonFill/> */}
</div >
<h2>Who to verify:</h2>
<div>Teachers and Tutors, administrative staff, field sales staff, other employees</div>
<div></div>
<h2>Most opted verifications:</h2>
<ul>
  <li>ID verification</li>
  <li>Address verification</li>
  <li>Criminal and court record verification</li>
  <li>Prior employment verification</li>
  <li>Highest education verification</li>
  <li>eLockr reference check (for field sales staff)</li>
</ul>
</div>

</div>
</div>
<i onClick={()=>setState(false)} className="fa-solid fa-circle-xmark" ></i>
</div>  
</div>


<div className={fee2()} >
  <div style={{width:'95%',height:"100%",marginLeft:'4%',marginRight:'4%',display:'flex'}}>
<div className='popup-item1' style={{backgroundColor:'black'}}>
<div className='container' style={{backgroundColor:'black'}}>
<div className='business-head'style={{backgroundColor:'black',width:'100%'}} >
<h1>Staffing</h1>
<h3>The staffing industry has been at the forefront of a paradigm shift with respect to the way employees are hired and deployed. With the aspect of long-term full-time employment being actively replaced with freelancing and temporary stints, more and more organizations (clients) rely on staffing companies for their staff needs. At the same time, these organizations are looking for verified people to be deployed at their sites. Staffing companies can not only reduce risk through background verification but also use it as a differentiator to win client contracts.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
<div style={{display:'flex',flexDirection:'column',position:'relative',height:'100%',backgroundColor:'rgb(7, 115, 115)'}}>
<div>
{/* <BsFillFilePersonFill/> */}
</div >
<h2>Who to verify:</h2>
<div>Blue-collar workers (eg. security guards, delivery boys, warehouse staff), Grey-collar workers (sales executives, field operations executives, tele-callers)</div>
<div></div>
<h2>Most opted verifications:</h2>
<ul>
  <li>ID verification</li>
  <li>Address verification</li>
  <li>Criminal and court record verification</li>
  <li>Prior employment verification</li>
  <li>Highest education verification</li>
  <li>eLockr reference check (for field sales staff)</li>
</ul>
</div>

</div>
</div>
<i onClick={()=>setState2(false)} className="fa-solid fa-circle-xmark" ></i>
</div> 
</div>
<div className={fee3()} >
  <div style={{width:'95%',height:"100%",marginLeft:'4%',marginRight:'4%',display:'flex'}}>
<div className='popup-item1' style={{backgroundColor:'black'}}>
<div className='container' style={{backgroundColor:'black'}}>
<div className='business-head'style={{backgroundColor:'black',width:'100%'}} >
<h1>Transportation, Logistics, eCommerce</h1>
<h3>With the adoption of high-technology in the supply chain sector, the industry has involuntarily become a massive driver of change, especially in developing economies. With delivery boys and warehouse staff handling high-value inventory, engaging with end customers at their doorsteps, or ferrying passengers, having an accountable workforce is not just desirable, but also necessary.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
<div style={{display:'flex',flexDirection:'column',position:'relative',height:'100%',backgroundColor:'rgb(7, 115, 115)'}}>
<div>
{/* <BsFillFilePersonFill/> */}
</div >
<h2>Who to verify:</h2>
<div>Drivers, delivery boys, warehouse staff, field executives, supervisors, distribution center workforce, other employees</div>
<div></div>
<h2>Most opted verifications:</h2>
<ul>
  <li>ID verification</li>
  <li>Address verification</li>
  <li>Criminal and court record verification</li>
  <li>Prior employment verification</li>
  <li>Highest education verification</li>
  <li>eLockr reference check (for field sales staff)</li>
</ul>
</div>

</div>
</div>
<i onClick={()=>setState3(false)} className="fa-solid fa-circle-xmark" ></i>
</div> 
</div>
<div className={fee4()} >
  <div style={{width:'95%',height:"100%",marginLeft:'4%',marginRight:'4%',display:'flex'}}>
<div className='popup-item1' style={{backgroundColor:'black'}}>
<div className='container' style={{backgroundColor:'black'}}>
<div className='business-head'style={{backgroundColor:'black',width:'100%'}} >
<h1>Banking, Financial Services, Insurance and Fin-Tech</h1>
<h3>Banking, Financial Services, and Insurance sector has gone through a decade of exponential growth with rapid innovation in technology (the rise of fintech) and rise in per capita income of the consumers. This period of unprecedented growth has been accompanied with ever increasing compliance and regulatory burden, especially given the employee access to highly sensitive financial data. This brings in its own source of challenges where the accountability of workforce is of supreme importance especially.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
<div style={{display:'flex',flexDirection:'column',position:'relative',height:'100%',backgroundColor:'rgb(7, 115, 115)'}}>
<div>
{/* <BsFillFilePersonFill/> */}
</div >
<h2>Who to verify:</h2>
<div>Engineering and technical staff, branch staff, cashiers, field executives, sales advisors, supervisors, other employees</div>
<div></div>
<h2>Most opted verifications:</h2>
<ul>
  <li>ID verification</li>
  <li>Address verification</li>
  <li>Criminal and court record verification</li>
  <li>Prior employment verification</li>
  <li>Highest education verification</li>
  <li>eLockr reference check (for field sales staff)</li>
</ul>
</div>

</div>
</div>
<i onClick={()=>setState4(false)} className="fa-solid fa-circle-xmark" ></i>
</div> 
</div>
<div className={fee5()} >
  <div style={{width:'95%',height:"100%",marginLeft:'4%',marginRight:'4%',display:'flex'}}>
<div className='popup-item1' style={{backgroundColor:'black'}}>
<div className='container' style={{backgroundColor:'black'}}>
<div className='business-head'style={{backgroundColor:'black',width:'100%'}} >
<h1>Banking, Financial Services, Insurance and Fin-Tech</h1>
<h3>Banking, Financial Services, and Insurance sector has gone through a decade of exponential growth with rapid innovation in technology (the rise of fintech) and rise in per capita income of the consumers. This period of unprecedented growth has been accompanied with ever increasing compliance and regulatory burden, especially given the employee access to highly sensitive financial data. This brings in its own source of challenges where the accountability of workforce is of supreme importance especially.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
<div style={{display:'flex',flexDirection:'column',position:'relative',height:'100%',backgroundColor:'rgb(7, 115, 115)'}}>
<div>
{/* <BsFillFilePersonFill/> */}
</div >
<h2>Who to verify:</h2>
<div>Engineering and technical staff, branch staff, cashiers, field executives, sales advisors, supervisors, other employees</div>
<div></div>
<h2>Most opted verifications:</h2>
<ul>
  <li>ID verification</li>
  <li>Address verification</li>
  <li>Criminal and court record verification</li>
  <li>Prior employment verification</li>
  <li>Highest education verification</li>
  <li>Professional reference check (for white-collar workforce)</li>
  <li>eLockr reference check (for field sales staff)</li>
  <li>Global database check (for senior executives)</li>
</ul>
</div>

</div>
</div>
<i onClick={()=>setState5(false)} className="fa-solid fa-circle-xmark" ></i>
</div> 
</div>
<div className={fee6()} >
  <div style={{width:'95%',height:"100%",marginLeft:'4%',marginRight:'4%',display:'flex'}}>
<div className='popup-item1' style={{backgroundColor:'black'}}>
<div className='container' style={{backgroundColor:'black'}}>
<div className='business-head'style={{backgroundColor:'black',width:'100%'}} >
<h1>Manufacturing</h1>
<h3>In addition to the compliances required to run a manufacturing setup, the sector has always been vulnerable to falling prey to incidents of destructive herd mentality. Therefore, it becomes critical to mitigate the risk through the BGV of the workforce, especially those working in factories, plants, and production lines.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
<div style={{display:'flex',flexDirection:'column',position:'relative',height:'100%',backgroundColor:'rgb(7, 115, 115)'}}>
<div>
{/* <BsFillFilePersonFill/> */}
</div >
<h2>Who to verify:</h2>
<div>Assembly line workforce (permanent and contractual), shop floor executives, other workers in factories and plants, corporate office employees</div>
<div></div>
<h2>Most opted verifications:</h2>
<ul>
  <li>ID verification</li>
  <li>Address verification</li>
  <li>Criminal and court record verification</li>
  <li>Prior employment verification</li>
  <li>Highest education verification</li>
  <li>eLockr reference check (for field sales staff)</li>
</ul>
</div>

</div>
</div>
<i onClick={()=>setState6(false)} className="fa-solid fa-circle-xmark" ></i>
</div> 
</div>
<div className={fee7()} >
  <div style={{width:'95%',height:"100%",marginLeft:'4%',marginRight:'4%',display:'flex'}}>
<div className='popup-item1' style={{backgroundColor:'black'}}>
<div className='container' style={{backgroundColor:'black'}}>
<div className='business-head'style={{backgroundColor:'black',width:'100%'}} >
<h1>IT/ITes</h1>
<h3>The IT/ITes sector and exports have propelled the growth of services sector in many geographies, making them the preferred offshore development destination. The IT industry hires millions of new employees/contractors every year. This sector needs to be well prepared to adhere to the Governance, Risk, and Compliance requirements that new age international engagements demand. To safeguard the interests of clients, accountability of its employees is of the highest importance, and BGV has become a standard across the industry.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
<div style={{display:'flex',flexDirection:'column',position:'relative',height:'100%',backgroundColor:'rgb(7, 115, 115)'}}>
<div>
{/* <BsFillFilePersonFill/> */}
</div >
<h2>Who to verify:</h2>
<div>Software development engineers, QA engineers, database and network administrators, client support staff, project managers, other employees.</div>
<div></div>
<h2>Most opted verifications:</h2>
<ul>
  <li>ID verification</li>
  <li>Address verification</li>
  <li>Criminal and court record verification</li>
  <li>Prior employment verification</li>
  <li>Highest education verification</li>
  <li>eLockr reference check (for field sales staff)</li>
</ul>
</div>

</div>
</div>
<i onClick={()=>setState7(false)} className="fa-solid fa-circle-xmark" ></i>
</div> 
</div>
<div className={fee8()} >
  <div style={{width:'95%',height:"100%",marginLeft:'4%',marginRight:'4%',display:'flex'}}>
<div className='popup-item1' style={{backgroundColor:'black'}}>
<div className='container' style={{backgroundColor:'black'}}>
<div className='business-head'style={{backgroundColor:'black',width:'100%'}} >
<h1>Healthcare</h1>
<h3>Healthcare industry globally will continue to grow with improving health seeking behavior and growing concerns for personal health among the general population. An impetus to this has been witnessed due to COVID-19, with a higher demand for testing done from the comforts of home. Provided the nature of work in the sector where there is a close engagement of the staff with service seekers, at home or in hospitals and clinics, and staff having access to highly sensitive medical data as well as drugs, BGV is essential to avoid any unforeseen situations.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
<div style={{display:'flex',flexDirection:'column',position:'relative',height:'100%',backgroundColor:'rgb(7, 115, 115)'}}>
<div>
{/* <BsFillFilePersonFill/> */}
</div >
<h2>Who to verify:</h2>
<div>Doctors, nursing and paramedical staff, laboratory technicians, phlebotomists, front-office staff, other employees.</div>
<div></div>
<h2>Most opted verifications:</h2>
<ul>
  <li>ID verification</li>
  <li>Address verification</li>
  <li>Criminal and court record verification</li>
  <li>Prior employment verification</li>
  <li>Highest education verification</li>
  <li>eLockr reference check (for field sales staff)</li>
</ul>
</div>

</div>
</div>
<i onClick={()=>setState8(false)} className="fa-solid fa-circle-xmark" ></i>
</div> 
</div>
<div className={fee9()} >
  <div style={{width:'95%',height:"100%",marginLeft:'4%',marginRight:'4%',display:'flex'}}>
<div className='popup-item1' style={{backgroundColor:'black'}}>
<div className='container' style={{backgroundColor:'black'}}>
<div className='business-head'style={{backgroundColor:'black',width:'100%'}} >
<h1>Internet Platforms</h1>
<h3>Modern-day internet platforms have redefined the way businesses are conducted, and customers or users are acquired. While digital distribution definitely helps in onboarding the customers or users faster, it definitely leaves the businesses susceptible to compliance risks, identity frauds, and/or banking frauds. Instant verification and/or KYC of customers or users can help in compliance adherence and risk mitigation, without adding friction to the seamless onboarding.</h3>
<hr style={{color:'aliceblue'}}/>
</div>
<div style={{display:'flex',flexDirection:'column',position:'relative',height:'100%',backgroundColor:'rgb(7, 115, 115)'}}>
<div>
{/* <BsFillFilePersonFill/> */}
</div >
<h2>Who to verify:</h2>
<div>Customers, users, sellers, and buyers on a marketplace, merchants, service providers, platform partners</div>
<div></div>
<h2>Most opted verifications:</h2>
<ul>
  <li>ID verification</li>
  <li>Address verification</li>
  <li>Criminal and court record verification</li>
  <li>Prior employment verification</li>
  <li>Highest education verification</li>
  <li>eLockr reference check (for field sales staff)</li>
</ul>
</div>

</div>
</div>
<i onClick={()=>setState9(false)} className="fa-solid fa-circle-xmark" ></i>
</div> 
</div>



</div>

{/* popUp 2 */}






</div>







  <br/>
  <br/>
  <button className='actionButton' style={{border:'none',marginRight:'5px'}}>Get Started</button>
  <br/>
  <br/>
  



</section>






    </div>
  )
}

export default Business