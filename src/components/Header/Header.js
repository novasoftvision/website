import React from "react";
import "./Header.scss";


const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <a href="/"><img className="logo" src="logo.png" alt="Logo" /></a>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="/" >About</a>
          </li>
          <li className="nav-link">
            <a href="/">Services</a>
          </li>
          <li className="nav-link">
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
