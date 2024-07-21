import React from "react"
import "./App.css" // Import your CSS file for styling

function Home_Benefits() {
  return (
    <>
      <div className="full-width-div">
        <div className="section">
          <div className="icon">
            <img src="ball.webp" alt="Trophy Icon" />
          </div>
          <h3>Championship Course</h3>
          <p>Celebrate victories on our championship course</p>
        </div>
        <div className="section">
          <div className="icon">
            <img src="golf-location.webp" alt="Trophy Icon" />
          </div>
          <h3>Location</h3>
          <p>Experience prestigious tournaments in scenic settings</p>
        </div>
        <div className="section">
          <div className="icon">
            <img src="trophy.webp" alt="Trophy Icon" />
          </div>
          <h3>Tournaments</h3>
          <p>Discover our prime location for golfing excellence</p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  )
}

export default Home_Benefits
