import React, { useState } from "react";
import logo from "../../assets/ivf-pulse-logo.png";
import arrow from "../../assets/Masked Icon.png";
import bunbtn from "../../assets/bunbtn.png";
import cross from "../../assets/cross_icon.svg";
import "./Navbar.css";

const Navbar = () => {
  // State to toggle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Navibar">
      <img src={logo} alt="logoimg" className="logo" />

      {/* Navbar Menu Items */}
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>Donor Programme</li>
        <li>Fertility Preservation</li>
        <li>Advanced Treatments</li>
        <li>Infertility Treatments</li>
        <li>IVF Testing</li>
        <li>About Us</li>
      </ul>

      {/* Talk to Us Button */}
      <button>
        Talk to Us
        <img src={arrow} alt="arrowicon" />
      </button>

      {/* Hamburger Button (only visible on mobile) */}

      <img
        src={isMenuOpen ? cross : bunbtn}
        alt="bunbtn"
        className="bunbuttion"
        onClick={toggleMenu} // Toggle the menu when clicked
      />
    </div>
  );
};

export default Navbar;
