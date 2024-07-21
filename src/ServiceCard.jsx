import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "./App.css"

function ServiceCard({ image, topText, bottomText }) {
  return (
    <Card style={{ width: "18rem", height: "19rem" }}>
      <Card.Img variant="top" src={image} className="card-img-custom" />
      <Card.Body>
        <Card.Title>{topText}</Card.Title>
        <Card.Text>{bottomText}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard
