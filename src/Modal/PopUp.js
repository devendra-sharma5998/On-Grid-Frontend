import React from 'react'
import '../Styles/PopUp.css'

const PopUp = () => {



    return (
      <div>
        <div className='popUp' ></div>
        <div className='popUpContainer' >
            {/* <div style={{display:'flex',justifyContent:'space-evenly' }}> */}
          <h2 className='popUpHeader'>Digital, Real-Time or Near Real-Time</h2>
          <button style={{height:"50px"}}>Book Demo</button>
          {/* </div> */}
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
    )
  }

export default PopUp