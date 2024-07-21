import React from "react"
import Container from "react-bootstrap/Container"
import Accordion from "react-bootstrap/Accordion"
import "./App.css"

function About() {
  return (
    <>
      <div className="about-image-container">
        <img
          src="about3.jpg"
          alt="An overview of Golf Club 176 grounds"
          className="about-img"
        />
        <div className="about-text-overlay">
          <div
            className="oswald-text about-text-large"
            role="heading"
            aria-level="1"
          >
            About Us
          </div>
          <div
            className="oswald-text about-text-small"
            role="heading"
            aria-level="2"
          >
            -Who We Are-
          </div>
        </div>
      </div>
      <h1 className="about-text-large oswald-text">Our Mission</h1>
      <p className="about-text-small oswald-text">
        At Golf Club 176, we pride ourselves on offering an exceptional golfing
        experience nestled in the heart of serene landscapes. With a rich
        history dating back decades, our club blends tradition with modern
        amenities, ensuring every visit is memorable. Join us and discover why
        Golf Club 176 is a preferred destination for golf enthusiasts.
      </p>
      <br />
      <br />
      <br />
      <Accordion defaultActiveKey="0" className="small-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            How can I become a member of the golf club?
          </Accordion.Header>
          <Accordion.Body>
            Membership details and application forms can be found on our website
            or by contacting the membership office directly.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Are there any membership benefits?
          </Accordion.Header>
          <Accordion.Body>
            Yes, members enjoy benefits such as access to all facilities,
            discounts on green fees, priority booking for tee times, and
            invitations to exclusive events.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you have a dress code?</Accordion.Header>
          <Accordion.Body>
            Yes, we require appropriate golf attire. Collared shirts and golf
            shoes are mandatory. Please avoid denim and casual wear on the
            course.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Do you offer golf lessons?</Accordion.Header>
          <Accordion.Body>
            Yes, we have professional instructors available for private and
            group lessons. Please contact the pro shop for more information and
            to schedule a lesson.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            What is the age range for Jr. Membership?
          </Accordion.Header>
          <Accordion.Body>
            Our Jr. Membership is offered for youth of ages 8-15
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            How many people is a family membership valid for?
          </Accordion.Header>
          <Accordion.Body>
            The family membership is only available for famillies of 4 but
            custom rates can be provided for famillies larger then that
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <br />
      <br />
    </>
  )
}

export default About
