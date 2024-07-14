import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo-image">
          <h2 className="name">Vaibhav M</h2>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`unordered-list ${isOpen ? "open" : ""}`}>
          <li className="list">
            <Link to="/">
              Home
            </Link>
            <Link to="/projects">
              Projects
            </Link>
            <Link to="/journey">
              Journey
            </Link>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
