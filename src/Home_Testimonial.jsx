import React from "react"
import Carousel from "react-bootstrap/Carousel"

function Home_Testimonial() {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First Testimonial</h3>
          <p>
            "As a frequent visitor and proud member of Golf Club 176, I can
            confidently say that the meticulously maintained course and
            top-notch facilities create an unparalleled golfing experience. The
            welcoming staff and friendly atmosphere make every visit enjoyable
            and memorable." - John Davis
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second Testimonial</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            malesuada turpis quis ex pharetra, sit amet commodo lorem ultricies.
            Nulla facilisi." - Jane Smith
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third Testimonial</h3>
          <p>
            "Sed et dolor sit amet libero cursus fermentum. Vestibulum
            pellentesque nulla nec tellus efficitur, non gravida nisl
            vestibulum." - Alex Johnson
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home_Testimonial
