import React from 'react'
import photo1 from '../assests/main1.png';
import photo2 from '../assests/main2.png';
import photo3 from '../assests/main3.png';
export default function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="images">
          <img src={photo2} alt="Main Image" className="left-image" />
          <img src={photo1} alt="Main2 Image" className="right-image" />
        </div>
        <div className="content">
          <h1>Welcome to Coding Campus!</h1>
          <h3>Join a dynamic community of students passionate about coding. Experience peer-to-peer learning, hands-on projects, and real-world solutions. Boost technical and soft skills while connecting with like-minded peers and industry professionals. Whether you're a seasoned coder or just starting, Coding Campus is your hub for innovation and collaboration.</h3>
        </div>
        <div className="images1">
          <img src={photo3} alt="Main Image" className="bottom-image" />
            <div classname="user-detail">
              <div className="svg-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="65" fill="white" className="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
              </div>  
              <button>Sign up</button>
          </div>
        </div>  
      </div>
      <div className="cards">
        <div className="links">
          <a href='#'>All Upcoming Events</a>
          <a href='#'>Coding Events</a>
          <a href='#'>Team</a>                    
        </div>
        <div className="line1"></div>
        <h3>add card grid accordingly</h3>
          
      </div>
    </>
  )
}
