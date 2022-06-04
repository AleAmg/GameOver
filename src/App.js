import Game1 from "./components/Game1";
import "./style.css"
import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game1 />} />
      </Routes>
    </div>
  );
}

export default App;
