import React from 'react'
import Navbar from '../Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from '../Components/home/Home'
import Footer from '../Components/Footer'
// import About from '../Components/About'
// import Services from '../Components/Services'
// import Contact from '../Components/Contact'





function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/About" element={<About />}></Route>
      <Route path="/Services" element={<Services />}></Route>
      <Route path="/Contact" element={<Contact />}></Route> */}
     </Routes>
      
     </BrowserRouter>
     
    <Footer/>

    
    </div>
  )
}

export default App
