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
            <a href="About" >About</a>
          </li>
          <li className="nav-link">
            <a href="Services">Services</a>
          </li>
          <li className="nav-link">
            <a href="Contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
