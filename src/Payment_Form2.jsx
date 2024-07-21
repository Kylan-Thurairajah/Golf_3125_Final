import React, { useState } from "react"
import { Modal, Button, Form, Row, Col } from "react-bootstrap"
import PaymentSuccessModal from "./PaymentSuccessModal" // Import the new component

function Payment_Form2({ show, closeModal }) {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expirationDate: "",
    cvc: "",
  })

  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCardData({
      ...cardData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Add your logic to handle form submission, e.g., send payment details
    console.log("Payment details submitted:", cardData)
    // Show the confirmation modal
    setShowConfirmationModal(true)
  }

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false)
    closeModal() // Close Payment_Form2 modal
  }

  return (
    <>
      <Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Step 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src="mc.png"
            alt="Mastercard"
            style={{ width: "15%", marginBottom: "20px" }}
          />
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                name="cardNumber"
                value={cardData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="cardName">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name on card"
                name="cardName"
                value={cardData.cardName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="expirationDate">
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    name="expirationDate"
                    value={cardData.expirationDate}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="cvc">
                  <Form.Label>CVC</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CVC"
                    name="cvc"
                    value={cardData.cvc}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="dark" type="submit">
                Pay Now
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <PaymentSuccessModal
        show={showConfirmationModal}
        closeModal={handleCloseConfirmationModal}
      />
    </>
  )
}

export default Payment_Form2
