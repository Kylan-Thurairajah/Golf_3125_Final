import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ServiceCard from "./ServiceCard"
import "./App.css"
import Call from "./Call"
import translations from "./lang/translations.jsx"

function Services({ lang }) {
  const translation = translations[lang]

  const cardData = [
    {
      image: "proShop.jpg",
      topText: "Pro Shop",
      bottomText: "Golf Apparell & Equipment",
    },
    {
      image: "putting.jpg",
      topText: "Putting Areas",
      bottomText: "3 Different Practice Locations",
    },
    {
      image: "tees.jpg",
      topText: "Complementary Equipment",
      bottomText: "Complementary golf cart, club cleaners, tees, golf balls",
    },
    {
      image: "18Holes.jpg",
      topText: "18 Hole Course",
      bottomText: "Beautifully designed 18 hole course",
    },
    {
      image: "coach.jpg",
      topText: "Private Golf Coaching",
      bottomText: "Select from our 6 different coaches",
    },
    {
      image: "drivingRange.jpg",
      topText: "Driving Range",
      bottomText: "400ft long driving range",
    },
    {
      image: "kids-golf.jpg",
      topText: "Golf For Children",
      bottomText: "Jr. memberships and lessons available",
    },
    {
      image: "dining.jpg",
      topText: "Restaurant",
      bottomText: "Dine in after a round",
    },
  ]

  const cardDataFr = [
    {
      image: "proShop.jpg",
      topText: "Pro Shop",
      bottomText: "Vêtements et Équipements de Golf",
    },
    {
      image: "putting.jpg",
      topText: "Zones de Putting",
      bottomText: "3 Emplacements de Pratique Différents",
    },
    {
      image: "tees.jpg",
      topText: "Équipement Complémentaire",
      bottomText:
        "Voiturette de golf, nettoyeurs de clubs, tees, balles de golf gratuits",
    },
    {
      image: "18Holes.jpg",
      topText: "Parcours de 18 Trous",
      bottomText: "Parcours de 18 trous magnifiquement conçu",
    },
    {
      image: "coach.jpg",
      topText: "Coaching Privé de Golf",
      bottomText: "Choisissez parmi nos 6 entraîneurs différents",
    },
    {
      image: "drivingRange.jpg",
      topText: "Practice",
      bottomText: "Practice de 400 pieds de long",
    },
    {
      image: "kids-golf.jpg",
      topText: "Golf pour Enfants",
      bottomText: "Abonnements et leçons pour juniors disponibles",
    },
    {
      image: "dining.jpg",
      topText: "Restaurant",
      bottomText: "Dîner après une partie",
    },
  ]

  const serviceCards = () => {
    const data = lang === "EN" ? cardData : cardDataFr

    return (
      <Container>
        <Row>
          {data.map((card, index) => (
            <Col key={index} md={3} className="mb-4">
              <ServiceCard
                image={card.image}
                topText={card.topText}
                bottomText={card.bottomText}
              />
            </Col>
          ))}
        </Row>
      </Container>
    )
  }

  return (
    <>
      <div className="about-image-container">
        <img src="carousel1.jpg" alt="Full Size" className="about-img" />
        <div className="about-text-overlay">
          <div className="oswald-text about-text-large">
            {translation.ourServices}
          </div>
          <div className="oswald-text about-text-small">
            {translation.whatWeOffer}
          </div>
        </div>
      </div>
      <h1 className="about-text-large oswald-text">{translation.facilities}</h1>

      <br />
      <br />
      {serviceCards()}
      <br />
      <br />
      <br />
      <br />

      <Call lang={lang} translation={translation} />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Services
