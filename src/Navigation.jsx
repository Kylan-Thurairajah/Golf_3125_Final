import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import "./App.css"
import translations from "./lang/translations"

function Navigation({ lang, setLang }) {
  const translation = translations[lang]
  const handleENClick = () => {
    setLang("EN")
  }

  const handleFNClick = () => {
    setLang("FR")
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand className="oswald-text">GOLF CLUB 176</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-between w-90"
        >
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-link-custom oswald-text">
              {translation.home}
            </Nav.Link>
            <Nav.Link href="/Holes" className="nav-link-custom oswald-text">
              {translation.holes}
            </Nav.Link>
            <Nav.Link
              href="/Membership"
              className="nav-link-custom oswald-text"
            >
              {translation.membership}
            </Nav.Link>
            <Nav.Link href="/About" className="nav-link-custom oswald-text">
              {translation.about}
            </Nav.Link>
            <Nav.Link href="/Services" className="nav-link-custom oswald-text">
              {translation.services}
            </Nav.Link>
          </Nav>
          <div className="d-flex justify-content-end">
            <Button
              variant={lang == "EN" ? "dark" : "light"}
              className="mx-2"
              onClick={handleENClick}
            >
              EN
            </Button>
            <Button
              variant={lang == "FR" ? "dark" : "light"}
              className="mx-2"
              onClick={handleFNClick}
            >
              FR
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
