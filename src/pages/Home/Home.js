import React from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/about/About";

const Home = () => {
  return (
    <div className="home">
      <section className="section-1">
        <div className="left-container">
          <About />
        </div>
        <div className="right-container">
          <Navbar />
        </div>
      </section>
    </div>
  );
};

export default Home;
