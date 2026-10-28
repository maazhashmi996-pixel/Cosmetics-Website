import React from 'react'
// import Navbar from '../Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../Components/About'
import Services from '../Components/Services'
import Contacts from '../Components/Contacts'

function App() {
  return (
    <div>
      <BrowserRouter>
        <About />
        <Services />
        <Contacts />
        <Routes>
          {/* <Route path="/About" element={<About />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          <Route path="/Services" element={<Services />}></Route> */}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
