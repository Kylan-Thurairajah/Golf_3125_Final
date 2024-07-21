import React, { useState } from "react"
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap"
import Home_About from "./Home_About"
import Payment_Form from "./Payment_Form" // Import the new PaymentForm component
import "./App.css" // Ensure this import is present to apply your CSS

function Membership() {
  const [showModal, setShowModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")

  const handleShow = (plan) => {
    setSelectedPlan(plan)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="about-image-container">
        <img
          src="extra.jpg" // Replace with your image URL
          alt="Full Size"
          className="about-img"
        />
        <div className="membership-text-overlay">
          <div className="oswald-text about-text-large">Memberships</div>
          <div className="oswald-text about-text-small">-Join Us-</div>
        </div>
      </div>
      <Home_About
        imgSrc="ball.webp"
        title="Why Golf Club 176?"
        description="Our club has won numerous awards for our sole and dependent mission too provide the finest of quality experiences to our members when your on our greens"
      />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col>
            <br />
            <h1 className="oswald-text about-text-large">
              Choose Membership Plan
            </h1>
            <br />
            <div
              className="oswald-text text-small"
              style={{ width: "auto", margin: "auto", textAlign: "center" }}
            >
              Find what suits you best
            </div>
            <br />
            <br />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Card className="membership-card">
              <Card.Body className="p-0 d-flex flex-column">
                <Card.Title
                  className="membership-card-title-1-3"
                  style={{ color: "#FFF" }}
                >
                  Full Membership - $240/Month
                </Card.Title>
                <Card.Text className="p-3 flex-grow-1">
                  - Unlimited access to all facilities <br /> - Priority tee
                  times <br /> - Participation in member events and tournaments{" "}
                  <br />
                  - Discounts on services and clubhouse amenities <br /> -
                  Discounts on lessons <br /> - Guest rates <br /> <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Button
                  variant="dark"
                  onClick={() => handleShow("Full Membership - $240/Month")}
                >
                  Join Now
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="membership-card">
              <Card.Body className="p-0 d-flex flex-column">
                <Card.Title
                  className="membership-card-title-2"
                  style={{ color: "#FFF" }}
                >
                  Jr. Membership - $180/Month
                </Card.Title>
                <Card.Text className="p-3 flex-grow-1">
                  - Access to premium facilities <br /> - Discounted rates on
                  rounds and lessons <br /> - Participation in junior
                  tournaments and clinics <br /> - Clubhouse privileges <br /> -
                  Special junior member events and programs <br /> <br /> <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Button
                  variant="dark"
                  onClick={() => handleShow("Jr. Membership - $180/Month")}
                >
                  Join Now
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="membership-card">
              <Card.Body className="p-0 d-flex flex-column">
                <Card.Title
                  className="membership-card-title-1-3"
                  style={{ color: "#FFF" }}
                >
                  Family Membership - $440/Month
                </Card.Title>
                <Card.Text className="p-3 flex-grow-1">
                  - All club facilities for all family members <br /> -
                  Discounted rates on rounds <br /> - Priority booking <br /> -
                  Access to social events <br /> - Junior programs for children
                  <br /> - Special family-oriented club activities <br /> <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Button
                  variant="dark"
                  onClick={() => handleShow("Family Membership - $440/Month")}
                >
                  Join Now
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br /> <br />
      <div className="full-width-div">
        <div
          className="section"
          style={{ paddingTop: "0px", marginTop: "0px" }}
        >
          <div className="icon">
            <img src="phone-icon.webp" alt="Trophy Icon" />
          </div>
          <br />
          <h3>Have More Questions? Call Us at +1 (123) 456-7890</h3>
        </div>
      </div>
      <br /> <br />
      <br /> <br /> <br />
      <Payment_Form
        showModal={showModal}
        closeModal={handleClose}
        selectedPlan={selectedPlan}
      />
    </>
  )
}

export default Membership
