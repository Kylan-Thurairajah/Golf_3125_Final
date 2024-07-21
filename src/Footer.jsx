import React from "react"
import Container from "react-bootstrap/Container"
import "./App.css"
import translations from "./lang/translations"

function Footer({ lang }) {
  const translation = translations[lang]
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-item">
            <img src="/ll.png" alt="Location icon" />
            <h5>{translation.location}</h5>
            <p>123 Golf Club Lane</p>
          </div>
          <div className="footer-item">
            <img src="/e.webp" alt="Email icon" />
            <h5>{translation.email}</h5>
            <p>info@golfclub176.com</p>
          </div>
          <div className="footer-item">
            <img src="/p.webp" alt="Phone icon" />
            <h5>{translation.phone}</h5>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
