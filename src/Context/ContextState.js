
import Store from "./Context";
import { useEffect, useState } from "react";
import axios from "axios";

const ContextProvider=(props)=>{

    const [state,setState]=useState([])

    useEffect(()=>{

        const funfoo=async ()=>{
            try {
                
                const {data}=await axios.get('http://localhost:8001/ourblog')
                console.log(data)
    
                setState(data)
                console.log(state)
            } catch (error) {
                console.log(error.message)
            }
            
        }
        funfoo()
    },[])



    return(
        <>
       {
        <Store.Provider value={{state}}>
            {props.children}
        </Store.Provider>
       }
        
        </>
    )
}

export default ContextProvider