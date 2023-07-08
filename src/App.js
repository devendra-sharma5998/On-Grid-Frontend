import logo from './logo.svg';
import Home from './Pages/Home';
import './App.css';
import OnGrid from './Pages/OnGrid';
import Navbar from './Header/Navbar';
import Footer from './Header/Footer';
import Offering from './Pages/Offering';
import Business from './Pages/Business';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import { Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Faq from './SinglePage/Faq';
import BookDemo from './SinglePage/BookDemo';
import AllRoutes from './Routes/AllRoutes';
import ContextProvider from './Context/ContextState';
import Store from './Context/Context';
import { useState } from 'react';
// import NavBar from './TopHeader/NavBar';

function App() {

const [data,setData]=useState([])

  return (
    <div className="App">
      <Store.Provider  value={{data,setData}}>

<AllRoutes/>

      </Store.Provider>
     

     


{/* <NavBar/> */}

 
      


      
     {/* <SignUp/> */}
    
  
    </div>
  );
}

export default App;
