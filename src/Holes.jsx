import React, { useState } from "react"
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import CustomCard from "./Card"
import FacetedSearch from "./FacetedSearch"
import "./App.css"

const cardData = [
  {
    id: 1,
    title: "Hole 1",
    image: "h1.jpg",
    features: ["sand bunker", "water hazards", "elevated tee"],
  },
  {
    id: 2,
    title: "Hole 2",
    image: "h2.jpg",
    features: ["sand bunker", "water hazards", "doglegs"],
  },
  {
    id: 3,
    title: "Hole 3",
    image: "h3.jpg",
    features: ["sand bunker", "water hazards", "roughs"],
  },
  {
    id: 4,
    title: "Hole 4",
    image: "h4.jpg",
    features: ["sand bunker", "water hazards", "roughs"],
  },
  {
    id: 5,
    title: "Hole 5",
    image: "h5.jpg",
    features: ["sand bunker", "water hazards", "roughs"],
  },
  {
    id: 6,
    title: "Hole 6",
    image: "h6.jpg",
    features: ["sand bunker", "water hazards"],
  },
  {
    id: 7,
    title: "Hole 7",
    image: "h7.jpg",
    features: ["sand bunker", "water hazards", "doglegs"],
  },
  {
    id: 8,
    title: "Hole 8",
    image: "h8.jpg",
    features: [
      "sand bunker",
      "water hazards",
      "roughs",
      "elevated tee",
      "doglegs",
    ],
  },
  {
    id: 9,
    title: "Hole 9",
    image: "h9.jpg",
    features: ["sand bunker", "water hazards", "roughs"],
  },
  {
    id: 10,
    title: "Hole 10",
    image: "h10.jpg",
    features: ["sand bunker", "water hazards"],
  },
  {
    id: 11,
    title: "Hole 11",
    image: "h11.jpg",
    features: ["sand bunker", "water hazards", "roughs"],
  },
  {
    id: 12,
    title: "Hole 12",
    image: "h12.jpg",
    features: ["sand bunker", "water hazards", "elevated tee", "doglegs"],
  },
  {
    id: 13,
    title: "Hole 13",
    image: "h13.jpg",
    features: ["sand bunker", "water hazards", "roughs", "doglegs"],
  },
  {
    id: 14,
    title: "Hole 14",
    image: "h14.jpg",
    features: ["sand bunker", "water hazards"],
  },
  {
    id: 15,
    title: "Hole 15",
    image: "h15.jpg",
    features: ["water hazards", "roughs", "elevated tee"],
  },
  {
    id: 16,
    title: "Hole 16",
    image: "h16.jpg",
    features: ["sand bunker", "water hazards"],
  },
  {
    id: 17,
    title: "Hole 17",
    image: "h17.jpg",
    features: ["sand bunker", "water hazards", "roughs", "elevated tee"],
  },
  {
    id: 18,
    title: "Hole 18",
    image: "h18.jpg",
    features: ["sand bunker", "water hazards", "doglegs"],
  },
]

// Utility function to chunk the card data into groups of three
const chunkArray = (array, chunkSize) => {
  const chunks = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

function Holes() {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredHoles, setFilteredHoles] = useState(cardData)
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleFilterChange = (filter, isChecked) => {
    setSelectedFilters((prevFilters) =>
      isChecked
        ? [...prevFilters, filter]
        : prevFilters.filter((f) => f !== filter)
    )
  }

  const handleSearch = () => {
    const results = cardData.filter((hole) =>
      selectedFilters.every((filter) => hole.features.includes(filter))
    )
    setFilteredHoles(results)
  }

  const handleCardClick = (image) => {
    setSelectedImage(image)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedImage(null)
  }

  const chunkedData = chunkArray(filteredHoles, 3)

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Row>
        <Col md={2}>
          <br />
          <FacetedSearch
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onSearch={handleSearch}
          />
        </Col>
        <Col md={10}>
          {chunkedData.map((chunk, chunkIndex) => (
            <Row key={chunkIndex} className="mb-4">
              {chunk.map((card) => (
                <Col key={card.id} md={4}>
                  <CustomCard
                    title={card.title}
                    image={card.image}
                    onClick={() => handleCardClick(card.image)}
                  />
                </Col>
              ))}
            </Row>
          ))}
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedImage && (
            <img src={selectedImage} alt="Selected" className="img-fluid" />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <br />
      <br />
      <br />
    </>
  )
}

export default Holes
