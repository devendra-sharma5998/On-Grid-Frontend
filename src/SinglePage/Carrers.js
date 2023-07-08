import React from "react";
import Footer from "../Header/Footer";
import "../Styles/Carrers.css";

import Navbar from "../Header/Navbar";

const Carrers = () => {
  return (
    <div>
      <Navbar />
      <div className="carrer-image">
        <div style={{paddingTop:'250px',color:'white',}}> Brighten Your Future</div>
      </div>
      <hr style={{backgroundColor:'rgb(51,204,204)',height:"5px",marginTop:'0'}}/>
      <section>
        <div className="carrer-container">
          <h1>Explore opportunities with us!</h1>
          <p className="carrer-content">
            We are a team of individuals with diverse backgrounds and expertise,
            all driven with a common purpose of enabling secure and digital
            transactions in a modern and growing India, with an opportunity to
            help millions of Indians access services easily, meet their
            aspirations, and provide upward mobility in society. All playing
            different yet significant roles, all working fervently towards
            creating better user experiences, all driven with a thirst for
            innovation. And in that dynamic, fast-paced community is a
            cornucopia of opportunities, for you. Pick a team, find your
            opportunity and get in touch with us.
          </p>
        </div>
        <div className="carrer-container" style={{backgroundColor: "#f1f1f1"}}>
          <p  className="carrer-content">
          <h1>Current Openings</h1>
          <p>Currently, there are no open positions.</p>
          However, please write to OnGrid with your profile if you are interested to be a part of the OnGrid journey
          </p>
          <button style={{width:'48%',height:'50px',backgroundColor:'black',color:'white',fontSize:'2rem'}}>Send your CV to partner@ongrid.in</button>
       
        </div>
        <br/>
        <br/>
      <Footer/>
      </section>
    </div>
  );
};

export default Carrers;
