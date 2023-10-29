import React from 'react'
import img2 from "../assets/bride-BW.jpg"
import { useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { BiCalendarAlt } from "react-icons/bi";

function Blog_Card(props) {
  const navigate=useNavigate()
  const detail=()=>{
    navigate(`blogs/${props.id}`)
  }
  return (
    
    <div className='blog_card' onClick={detail}>
       <img src={`http://localhost:8000/${props.img}`}  alt="" className='blog_img' />
       <div className='blog_cont'>
        <div className='blog_cat'><p>{props.cat}</p></div>
        <div className='blog_des'><p> {props.tit}</p></div>
        <div className='blog_info'>
            <div className='blog_host'><BiUser className='blog_icon'/>{props.auth}</div>
            <div className='blog_date'><BiCalendarAlt className='blog_icon'/>{props.date}</div>
        </div>
       
   </div>
      
    </div>
  )
}

export default Blog_Card
