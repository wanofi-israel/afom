import React from 'react'
import img2 from "../assets/ladymodel3.jpg";

const Collections_Card = () => {
  return (
    <div className="collection_card">
      <img src={img2} className="collection_img"/>

      <div className="collection_des">
          <div className='collection_name'>
            <p className='collection-name-head'>Qemiss</p>
             <p className='collection-name-type'>women dress</p>
            </div>

            <div className='collection_year'>
              <h3>2018</h3>
              </div>
            


      </div>


      
    </div>
  )
}

export default Collections_Card