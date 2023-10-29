import React from 'react'
import Collections_Card from './Collections_Card'

const Collections = () => {
  return (
    <section className="collections" id="Collection">
      <div className="collection-content">
        {/* collection tabs */}
      <div className="tabs">
        <div className='All-cloths'><p>All</p></div>
        <div className='Wedding'><p>Wedding</p></div>
        <div className='Women'><p>Women</p></div>
        <div className='Men'><p>Men</p></div>
        <div className='All-cloths'><p>All</p></div>
        <div className='Wedding'><p>Wedding</p></div>
        <div className='Women'><p>Women</p></div>
        <div className='Men'><p>Men</p></div>
        <div className='All-cloths'><p>All</p></div>
        <div className='Wedding'><p>Wedding</p></div>
        <div className='Women'><p>Women</p></div>
        <div className='Men'><p>Men</p></div>
      </div>
      {/* collection tabs */}
      <div className="collection_card_container">
      <Collections_Card/>
       <Collections_Card/>
        <Collections_Card/>
        <Collections_Card/>
         <Collections_Card/>
          <Collections_Card/>
           <Collections_Card/>
      </div>
      
      </div>
      

    </section>
  )
}

export default Collections
