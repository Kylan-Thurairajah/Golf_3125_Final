import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import Payment_Form2 from "./Payment_Form2"
import "./App.css"

function PaymentForm({ showModal, closeModal, selectedPlan }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  })

  const [showStep2Modal, setShowStep2Modal] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowStep2Modal(true)
  }

  const handleCloseStep2Modal = () => {
    setShowStep2Modal(false)
    closeModal()
  }

  return (
    <>
      <Modal show={showModal && !showStep2Modal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPlan}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                rows={3}
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="dark" type="submit" className="submit-btn">
                Next
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Next Step Modal */}
      <Payment_Form2 show={showStep2Modal} closeModal={handleCloseStep2Modal} />
    </>
  )
}

export default PaymentForm
