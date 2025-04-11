import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container-left">
        <div className="title-1">Get the next level developments.</div>
        <div className="text-1">
          At Novasoft Vision Inc., we don’t just develop software—we bring ideas
          to life. Every pixel, every line of code, and every system we build is
          fueled by curiosity, crafted with care, and driven by purpose. As a
          tight-knit team of thinkers, builders, and dreamers, we turn complex
          problems into elegant digital solutions. <strong>Stay tuned!</strong> 💡✨
        </div>
        <div className="buttons-1">
          <button className="btn-1">Get a Quote</button>
          <button className="btn-2">Contact Us</button>
        </div>
      </div>
      <div className="container-right">
        <img src="intro.png" alt="Intro" className="img-intro" />
        <div className="square-top-right"></div>
        <div className="square-bottom-left"></div>
      </div>
    </div>
  );
};

export default Intro;
