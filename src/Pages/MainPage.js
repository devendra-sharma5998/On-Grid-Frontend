import React from 'react'
import Navbar from '../Header/Navbar'
import Home from './Home'
import OnGrid from './OnGrid'
import Offering from './Offering'
import Business from './Business'
import Footer from '../Header/Footer'
import Gridtwo from '../TryOffering/Offeringtry'

const MainPage = () => {
  return (
    <>
    
    <Navbar/>
    <Home/>
    <OnGrid/>
    {/* <Offering/> */}
    <Gridtwo/>
    <Business/>
    <div style={{marginTop:'120px'}}>

    <Footer/>
    </div>
    </>
  )
}

export default MainPage