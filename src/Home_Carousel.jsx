import React from "react"
import Carousel from "react-bootstrap/Carousel"
import "./App.css"

function Home_Carousel() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src="hole7.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Premier Golf Courses</h3>
            <p>
              Exceptional play on meticulously designed courses with
              breathtaking views
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="extra.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Unforgettable Golf Experience</h3>
            <p>
              Discover pristine courses and stunning vistas for an unforgettable
              round
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="carousel3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Complementary Golf Carts</h3>
            <p>Find a full list of our ammenities on our membership page</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Home_Carousel
