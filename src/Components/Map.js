import React from 'react'
import photo2 from '../assests/map.png'
export default function Map() {
  return (
    <>
      <img src={photo2} alt="Map" className="map-image" />
      <div className="box">
        <h2>Explore by region</h2>
        <div className="directions">
            <a href='#'>East</a>
            <a href='#'>West</a>
            <a href='#'>North</a>
            <a href='#'>South</a>          
        </div>
        <div className="line"></div>
      </div>
  
    </>
  )
}
