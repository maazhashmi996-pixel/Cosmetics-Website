import React from "react";
// import Navbar from "../Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App;


