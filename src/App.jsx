import React, { useState } from "react"
import Navigation from "./Navigation"
import Home_About from "./Home_About"
import Home_Benefits from "./Home_Benefits"
import Home_Testimonial from "./Home_Testimonial"
import About from "./About"
import Holes from "./Holes"
import Services from "./Services"
import Membership from "./Membership"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer"

function App() {
  const [lang, setLang] = useState("EN")
  return (
    <>
      <Navigation lang={lang} setLang={setLang} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/holes" element={<Holes />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </div>
      <Footer lang={lang} />
    </>
  )
}

export default App
