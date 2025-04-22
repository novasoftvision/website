import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="wrapper-nav">
      <div className="container-nav">
        <div className="container-logo">
          <Link to="/">
            <img
              className="logo"
              src="logo.png"
              alt="Novasoft Vision Inc. Logo"
            />
          </Link>
        </div>
        <div></div>
        <div className="container-links">
          <div className="menu-ham">
            <div className="line-ham"></div>
            <div className="line-ham"></div>
            <div className="line-ham"></div>
          </div>
          <ul className="links">
            <li className="nav-link" onClick={() => handleNavClick("about")}>
              ABOUT
            </li>
            <li className="nav-link" onClick={() => handleNavClick("services")}>
              SERVICES
            </li>
            <li className="nav-link" onClick={() => handleNavClick("contact")}>
              CONTACT US
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
