import React from "react";
import "../Styles/AboutUs.css";
import aboutImage from "../Images/aboutImage.png";
import Navbar from "../Header/Navbar";
import Footer from "../Header/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
        <img className="about-image" src={aboutImage} />
        <hr style={{backgroundColor:'rgb(51,204,204)',height:"5px",marginTop:'-4px'}}/>

        <section className="about-main-container">

            <div className="about-container">
          <h2>How it all began</h2>
          <p className="about-content">
            OnGrid was estabpshed in 2015 with the vision of catalyzing trust
            and accountability in communities with a trust deficit.
            Our philosophy is to enable individuals and organizations to engage in a
            frictionless manner in a high-trust environment by facilitating
            data-driven decisions that go beyond fact-checking.
          </p>
            </div>

            <div className="about-container" style={{backgroundColor: "#f1f1f1"}}>
          <h2>Where we are</h2>
          <p className="about-content">
          OnGrid is a reputed name in the space of trust establishment via background verification and checks, having served over 2000+ clients across multiple industries, and having completed over 100 million checks. We continue to grow at a rapid pace, as we introduce new solutions such as eLockr and Gridlines for making trust establishment and verifications faster, cheaper, and more accurate.
          </p>
            </div>

            <div className="about-container" >
          <h2>Our team</h2>
          <p className="about-content">
          Our team comprises of passionate people across engineering, product management, operations, business development and account management, who are committed to solving the trust-deficit problem in a manner that is elegant, and easy to adopt for our clients. We are a team of 200+ full-time employees and 1000+ contractual field verifiers. We are constantly hiring, and if you wish to be a part of our team, give us a shout at careers@ongrid.in.          </p>
            </div>

            <div className="about-container" style={{backgroundColor: "#f1f1f1"}}>
          <h2>Our core values</h2>
          
            <span typeof="circle">1. Be the gatekeepers to authenticity, and protect the truth.</span>
            <br/>
            <span>2. Creating a fair working world, devoid of fraud.</span>
            <br/>
            <span>3. Empower the less privileged to achieve upward mobility.</span>
          
            </div>
        </section>
        <br/>
        <br/>

      <Footer/>
    </div>
  );
};

export default AboutUs;
