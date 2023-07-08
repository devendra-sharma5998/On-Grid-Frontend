import React from 'react'
import '../Styles/OurBlogCard.css'

const OurBlogCard = ({data}) => {




  return (
   <div className='blog-card-main-box'>
    <div><img src={data.image} width='80%' /></div>
    <h1>{data.title}</h1>
    <p>{data.description}</p>

   </div>
  )
}

export default OurBlogCard