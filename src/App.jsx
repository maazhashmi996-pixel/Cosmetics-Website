import React from "react";
// import Navbar from "../Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Components/About";

function App() { 
  return (
    <BrowserRouter>
      {/* <About /> */}

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


