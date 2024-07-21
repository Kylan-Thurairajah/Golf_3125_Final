import React from "react"
import { Card } from "react-bootstrap"
import "./App.css"

const CustomCard = ({ title, image, onClick }) => {
  return (
    <Card
      onClick={onClick}
      style={{ cursor: "pointer", width: "18rem", margin: "10px" }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CustomCard
