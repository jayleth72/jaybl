import React from "react"
import logo from "../assets/jl_logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="jay's logo"/>
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
