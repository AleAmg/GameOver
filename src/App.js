import Home from "./components/Home";
import "./App.css";
import React from "react";  
import { Routes, Route } from "react-router";
import Game from "./components/Game";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/game" element={<Game /> }/>
      </Routes>
    </div>
  );
}

export default App;
