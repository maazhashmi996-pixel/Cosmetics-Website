
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

