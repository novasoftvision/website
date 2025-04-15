import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container-nav">
      <div className="container-logo">
        <a href="/">
          <img className="logo" src="logo.png" alt="Novasoft Vision Inc. Logo" />
        </a>
      </div>
      <div></div>
      <div className="container-links">
        <div className="menu-ham">
            <div className="line-ham"></div>
            <div className="line-ham"></div>
            <div className="line-ham"></div>
        </div>
        <ul className="links">
          <li className="nav-link">
            <a href="#about">ABOUT</a>
          </li>
          <li className="nav-link">
            <a href="#services">SERVICES</a>
          </li>
          <li className="nav-link">
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
