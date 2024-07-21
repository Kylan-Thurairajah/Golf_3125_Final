import React from "react"
import { Modal, Button } from "react-bootstrap"

function PaymentSuccessModal({ show, closeModal }) {
  return (
    <Modal show={show} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Payment Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <br />
        <p>
          Welcome to the team come by anytime to get your membership card as
          well as a tour of the facility
        </p>
        <br />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PaymentSuccessModal
