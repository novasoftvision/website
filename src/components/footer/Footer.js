import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
        </div>
        <div>
          &copy; {new Date().getFullYear()} Novasoft Vision Inc. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
