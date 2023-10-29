import React, { useEffect, useState } from 'react'
import Blog_Card from './Blog_Card'
import axios from "axios"
function Blog() {

  const [Blog,setBlog]=useState([])
  
  useEffect(()=>{
     axios.get("http://127.0.0.1:8000/blog/api").then((res)=>setBlog(res.data))
  },[])

  // state = {
  //   data: []
  // };

  // // Fetch the data from the Django REST API when the component mounts
  // componentDidMount() {
  //   // Use a template literal to insert the id parameter in the URL
  //   axios.get('http://127.0.0.1:8000/blog/api')
  //     .then(response => {
  //       // Update the state with the fetched data
  //       this.setState({ data: response.data });
  //     })
  //     .catch(error => {
  //       // Handle any errors
  //       console.error(error);
  //     });
  // }

  console.log(Blog)
  const blogCard=Blog.map(el=>
  <Blog_Card
  key={el.id}
  id={el.id}
  cat={el.category}
  tit={el.title}
  auth={el.author}
  date={el.date_updated}
  img={el.banner}
  />)

  return (
    <div className="blog_section" id="Blog">
      <div className="blogs_header">
        <h1 className="blog_heading">
          Our latest Blog & news
        </h1>
      </div>
      <div className="blog_container">
          {blogCard}
          </div>
          <button className='watch_more'>Watch more Blogs</button>
    </div>
  )
}

export default Blog
