import React,{useState,useEffect} from 'react'

const Gridtwo = () => {
    const [data,setData] = useState(false);
    const [data2,setData2]=useState(false)
    const [data3,setData3]=useState(false)

    useEffect(()=>{
    
    },[data])

function foo (){
// console.log("foo of ofering woekrihl")
    if(data === false){
        return ( 'popUp popUp-none' )
    }
    else if(data === true){
        return ( 'popUp popUp-block' )
    }
}
function foo2 (){
// console.log("foo of ofering woekrihl")
    if(data2 === false){
        return ( 'popUp popUp-none' )
    }
    else if(data2 === true){
        return ( 'popUp popUp-block' )
    }
}
function foo3 (){
// console.log("foo of ofering woekrihl")
    if(data3 === false){
        return ( 'popUp popUp-none' )
    }
    else if(data3 === true){
        return ( 'popUp popUp-block' )
    }
}

    return (
 
    <div className="popUpDetail">

      <div className='Offering-head'>

      <h1>Our Offerings</h1>
      <p>
        "We offer identity and background verifications for various candidates -
        covering employees and contractors, new users, customers, merchants,
        loan applicants, etc."
      </p>
      <br/>
      <br/>
      </div>

      <section id="Offering">
        <div>
      <div className="fun-main">
          <div id="OfferingContainer"  >
            <div className='off-contain-second'>
            <div id="Box" className=" Box1" onClick={()=>setData(true)}>
              <h1>OnGrid background verification with choice of 50+checks</h1>
            </div>

            {/* {modal && <PopUp />} */}

            <div id="Box" className="Box2" onClick={()=>setData2(true)}>
              <h1>
                Gridlines API for instant ID verification, KYC and onboarding
              </h1>
            </div>
            <div id="Box" className="Box3" onClick={()=>setData3(true)}>
              <h1>eLockr for issuing employment credentials to ex-employees</h1>
            </div>


{/* ~~~ coe foe pop up */}
<div className={foo()} >
        <div className='popup-box1'>
        
        <div className='popup-box2'>
          <div style={{display:'flex',marginTop:'20px'}}>
            <div style={{display:'flex',flexDirection:'column'}}>
        <div className='popUpContainer' >
          <h2 className='popUpHeader'>Digital, Real-Time or Near Real-Time</h2>
          <button style={{height:"50px"}}>Book Demo</button>
         
      <hr></hr>
      <ul>
          <li>OnGrid background verification serving 2000+ organizations for higher trust and accountability</li>
          <li>Employee / contractor / provider / partner / user background verification with choice of 50+ checks - ID verification, address verification, education check, employment check, reference checks, CV validation, global database checks (world check), credit checks, bank account verification, vehicle registration verification, traffic violation check, police / court record checks, etc</li>
          <li>Provision to integrate HRMS or employee / contractor / provider / partner / user onboarding platform with OnGrid APIs</li>
          <li>Provision for self-registration by candidate, facilitating digital collection of details, documents and consent, thereby reducing effort of the HR / Operations team.</li>
          <li>Data and document security ensured through encryption methodologies, role based access, and adherence to regulatory requirements.</li>
          <li>Basic checks require no document, with bulk verification format and options for large-scale hiring</li>
          <li>Prior employment verification</li>
          <li>Real-time status through reports and dashboards. Interim reports available as and when checks get completed.</li>
      </ul>
      </div>
      </div>
            </div>
          </div>
        </div>
        <i onClick={()=>setData(false)} className="fa-solid fa-circle-xmark" ></i>
       </div>


{/* ~~~ coe foe pop up */}
<div className={foo2()} >
    <div className='popup-box1'>
       
        </div>
        <div className='popup-box2'>
        <div style={{display:'flex',marginTop:'20px'}}>
            <div style={{display:'flex',flexDirection:'column'}}>
        {/* <div className='popUpContainer' > */}
          <h2 className='popUpHeader'>Gridlines APIs for instant ID verification, KYC and onboarding</h2>
          <button style={{height:"30px"}}>Book Demo</button>
         <div>Integrate Gridlines APIs in your mobile and web applications to instantly onboard users, customers, service providers, staff, merchants, etc.</div>
      <hr></hr>
      <ul>
          <li>Instant ID verification and KYC APIs (Passport, PAN, Aadhaar, Voter ID, Driving Licence)</li>
          <li>Other onboarding APIs (Instant Bank account verification, Face match, Vehicle RC verification, Credit Check, COVID vaccination verification, GST verification)</li>
          <li>Data and document security ensured through encryption methodologies, role based access, and adherence to regulatory requirements.</li>
          <li>Basic checks require no document, with bulk verification format and options for large-scale hiring</li>
          <li>Prior employment verification</li>
          <li>Employee / contractor / provider / partner / user background verification with choice of 50+ checks - ID verification, address verification, education check, employment check, reference checks, CV validation, global database checks (world check), credit checks, bank account verification, vehicle registration verification, traffic violation check, police / court record checks, etc</li>
          <li>Provision to integrate HRMS or employee / contractor / provider / partner / user onboarding platform with OnGrid APIs</li>
          <li>Across all APIs, Gridlines APIs ensure high accuracy, uptime, redundancy and fault tolerance</li>
      </ul>
      </div>
      </div>
          {/* </div> */}
        </div>
        <i onClick={()=>setData2(false)} className="fa-solid fa-circle-xmark" ></i>
       </div>

            {/* ~~~ coe foe pop up */}

            <div className={foo3()} >
        <div className='popup-box1'>
       

        </div>
        <div className='popup-box2'>
        <div style={{display:'flex',marginTop:'20px'}}>
            <div style={{display:'flex',flexDirection:'column'}}>
        <div className='popUpContainer' >
            <div className='head-bar'>
          <h2 className='popUpHeader'>eLockr for issuing employment credentials to ex-employees</h2>
          <button style={{height:"50px"}}>Book Demo</button>
          </div>
         <div>eLockr is a free platfrom for employers to issue employment credentials to ex-employees and ex-contractors</div>
      <hr></hr>
      <ul>
      <li>Employee / contractor / provider / partner / user background verification with choice of 50+ checks - ID verification, address verification, education check, employment check, reference checks, CV validation, global database checks (world check), credit checks, bank account verification, vehicle registration verification, traffic violation check, police / court record checks, etc</li>
          <li>Provision to integrate HRMS or employee / contractor / provider / partner / user onboarding platform with OnGrid APIs</li>
         <li>Empower your ex-employees and ex-contractors by issuing digital employment credentials</li>
         <li>Outsource your ex-employee verification process while earning credits!</li>
         <li>Gain useful insights into attrition</li>
         <li>Facilitate instant verification, done digitally</li>
          <li>Prior employment verification</li>
         
         <li>Build accountability through 65+ standardized reference tags</li>
      </ul>
      </div>
      </div>
            {/* </div> */}
          </div>
        </div>
        <i onClick={()=>setData3(false)} className="fa-solid fa-circle-xmark" ></i>
       </div>


</div>



          </div>
 </div>
 </div>
 </section>


{/*  ~~~~~~  CODE FOE POP UP  ~~~~~~~ */}




          </div>
  )
}

export default Gridtwo