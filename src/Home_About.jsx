import React from "react"
import "./App.css" // Import your CSS file for styling

function Home_About({ imgSrc, title, description }) {
  return (
    <div className="home-about-container">
      <div className="left-column">
        <img src={imgSrc} alt="Description of the image" />
      </div>
      <div className="right-column">
        <h2 className="home-about-h3">{title}</h2>
        <br />
        <p className="home-about-p">{description}</p>
      </div>
    </div>
  )
}

export default Home_About
