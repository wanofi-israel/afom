import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../App.css"
function BlogDetail() {
  const [detail,setDetail]=useState({__html: ""})
  // const det=
  const {id}=useParams()
  useEffect(() => {
    async function createMarkup() {
      let response;
      response = await fetch(`http://localhost:8000/view_post/${id}`)
       const backendHtmlString = await response.text()

       console.log(backendHtmlString)
        return {__html: backendHtmlString};
     }
     createMarkup().then(result => setDetail(result));
  }, []);
  return <div dangerouslySetInnerHTML={detail}/>
}

export default BlogDetail
