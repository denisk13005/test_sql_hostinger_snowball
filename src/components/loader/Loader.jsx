import React from "react"
import "./loader.scss"

const Loader = () => {
  return (
    <section className="spinnerContainer">
      <span className="loading">Loading</span>
      <span className="firstPoint">.</span>
      <span className="secondPoint">.</span>
      <span className="thirdPoint">.</span>
    </section>
  )
}

export default Loader
