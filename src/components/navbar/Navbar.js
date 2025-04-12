import React from "react";
import "./Navbar.scss";
import { Player } from "@lottiefiles/react-lottie-player";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="container-top">
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-link">
              <a href="/">About</a>
              <img src="arrow-up-right.png" className="link-arrow" alt="Link Arrow"/>
            </li>
            <li className="nav-link">
              <a href="/">Services</a>
              <img src="arrow-up-right.png" className="link-arrow" alt="Link Arrow"/>
            </li>
            <li className="nav-link">
              <a href="/">Contact Us</a>
              <img src="arrow-up-right.png" className="link-arrow" alt="Link Arrow"/>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-bottom">
        <Player
          autoplay
          loop
          src="a.json"
          className="rocket"
        />
      </div>
    </div>
  );
};

export default Navbar;
