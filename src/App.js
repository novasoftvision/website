import React from "react";
import Home from "./pages/Home/Home";
import MessageReceived from "./pages/MessageReceived/MessageReceived";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MessageReceived" element={<MessageReceived />} />
      </Routes>
    </div>
  );
}

export default App;
