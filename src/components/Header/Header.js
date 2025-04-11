import React from "react";
import "./Header.scss";


const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <img className="logo" src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#home" >About</a>
          </li>
          <li className="nav-link">
            <a href="#about">Services</a>
          </li>
          <li className="nav-link">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
