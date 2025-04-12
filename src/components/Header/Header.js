import React from "react";
import "./Header.scss";

const Header = () => {
  return (
      <header className="logo-container">
        <a href="/">
          <img className="logo" src="logo.png" alt="Logo" />
        </a>
      </header>

  );
};

export default Header;
