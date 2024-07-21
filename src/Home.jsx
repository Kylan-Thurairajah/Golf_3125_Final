import React from "react"
import { Link } from "react-router-dom"
import Navigation from "./Navigation"
import Home_About from "./Home_About"
import Home_Benefits from "./Home_Benefits"
import Home_Testimonial from "./Home_Testimonial"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home_Carousel from "./Home_Carousel"
import Button from "react-bootstrap/Button"

function Home() {
  return (
    <>
      <div className="image-container">
        <img src="golf-ball.jpg" alt="Full Size" className="main-img" />
        <div className="text-overlay">
          <div className="oswald-text text-large">GOLF CLUB 176</div>
          <div className="oswald-text text-small">-Swing Into Serenity-</div>
          <br />
          <Link to="/membership">
            <Button variant="dark">Join Now</Button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Home_About
        imgSrc="home-about.jpg"
        title="About Golf Club 176"
        description="Originally built in 1976 by world-renowned golf course architect Fairway Alchemist, this course has been celebrated for its innovative design and strategic layout, attracting golfers from around the globe who seek both challenge and aesthetic beauty in their golfing experience."
      />
      <br />
      <br />
      <br />
      <br /> <br />
      <Home_Benefits />
      <Home_Testimonial />
      <Home_Carousel />
    </>
  )
}

export default Home
