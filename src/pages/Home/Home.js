import React from "react";
import "./Home.scss";
import About from "../../components/about/About";
import Services from "../../components/services/Services";
import Process from "../../components/process/Process";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Tech from "../../components/tech/Tech";

const Home = () => {
  return (
    <div className="home">
      <main className="main">
        <About/>
        <Services/>
        <Process/>
        <Tech/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
