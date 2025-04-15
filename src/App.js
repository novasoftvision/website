import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
