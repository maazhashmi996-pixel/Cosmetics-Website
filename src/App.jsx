import React from 'react'
// import Navbar from '../Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Components/home/Home'
import About from '../Components/About'
import Services from '../Components/Services'
import Portfolio from '../Components/home/Portfolio'
import Blog from '../Components/home/Blog'
import Contacts from '../Components/Contacts'


function App() {
  return (
    <div>
      <BrowserRouter>
        <About />
        <Services />
        <Contacts />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
