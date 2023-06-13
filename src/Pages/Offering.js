import React from "react";
import "../Styles/Offering.css";
// import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import PopUp from "../Modal/PopUp";

const Offering = () => {
  const pop = useRef();

  const [modal, setModal] = useState(false);

  function foo (){
    pop.current.style.display='block'
}

  return (
    <>
 
    <div className="popUpDetail">
      <h1>Our Offerings</h1>
      <p>
        "We offer identity and background verifications for various candidates -
        covering employees and contractors, new users, customers, merchants,
        loan applicants, etc."
      </p>
      <br/>
      <br/>

      <section id="Offering">
        <div>
      <div className="fun-main">
          <div id="OfferingContainer"  >
            <div id="Box" className=" Box1" onClick={foo}>
              <h1>OnGrid background verification with choice of 50+checks</h1>
            </div>

            {modal && <PopUp />}

            <div id="Box" className="Box2">
              <h1>
                Gridlines API for instant ID verification, KYC and onboarding
              </h1>
            </div>
            <div id="Box" className="Box3">
              <h1>eLockr for issuing employment credentials to ex-employees</h1>
            </div>
          </div>

          </div>
         

{/* <div className='popUp' ></div> */}
        {/* <div style={{display:'flex',justifyContent:'space-evenly' }}> */}
    {/* <div className='popUpContainer' >
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
  </div> */}

</div>

<div className="pop-up-contain">
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
      
      </section>
    </div>
    </>
  );
};

export default Offering;
