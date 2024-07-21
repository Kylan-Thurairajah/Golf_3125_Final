import React from "react"
import "./App.css"

function Call({ translation }) {
  return (
    <>
      <div className="full-width-div">
        <div
          className="section"
          style={{ paddingTop: "0px", marginTop: "0px" }}
        >
          <div className="icon">
            <img src="phone-icon.webp" alt="Trophy Icon" />
          </div>
          <br />
          <h3>{translation.callUs}</h3>
        </div>
      </div>
    </>
  )
}

export default Call
