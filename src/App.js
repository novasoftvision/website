import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
