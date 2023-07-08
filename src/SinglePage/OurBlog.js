import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OurBlogCard from '../Component/OurBlogCard'
import Navbar from '../Header/Navbar'
import Footer from '../Header/Footer'
import '../Styles/OurBlogCard.css'



const OurBlog = () => {
 

const [state,setState]=useState([])
const [visible,setVisible] = useState(6)
const showMore = ()=>{
  setVisible((v)=>v+3)
}

useEffect(()=>{

const fun=async()=>{
  const {data}=await axios.get('http://localhost:8001/ourblog')
  // console.log(data)

  setState(data)
  console.log(state)

}
fun()

},[])


  return (
    <div>
      <Navbar/>
      <div style={{marginLeft:'100px',marginRight:'100px',textAlign:'justify',fontSize:'1.53rem'}}>

    <h1 className='OurBlog-headline-Text'>OnGrid – Blogs on background checks,<br/> verifications, and beyond…</h1>
      </div>
<hr style={{height:'5px',marginLeft:'100px',marginRight:'100px',backgroundColor:'black'}}/>
    <div style={{textAlign:'justify',marginLeft:'100px',marginTop:'25px',marginBottom:'20px',color:'gray'}}>Digital Trust Platform</div>
   
   
    <div  style={{display:'flex',padding:'0 80px 0 80px ',flexWrap:'wrap',justifyContent:'space-around',flexDirection:'row',}}>
      {state && state.slice(0,visible).map((e,i)=>{
        return(
          <OurBlogCard data={e} />
        )
      })}
    </div>

    <div className='loadMoreBtncontainer'>
              {visible >= 10 ? <button className='loadMoreBtn' onClick={()=>{
                setVisible((v)=>v-6)
                window.scrollTo({
                  top: 100,
                  behavior: "smooth",
                });
                }}>Show Less</button> 
                :  <button onClick={showMore}  className='loadMoreBtn'>Load more</button>}
  
   </div>


<Footer/>
    </div>
  )
}

export default OurBlog