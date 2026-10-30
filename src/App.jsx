import React from 'react'
import Navbar from '../Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Components/home/Home'
import About from '../Components/About'
import Services from '../Components/Services'
import Contacts from '../Components/Contacts'
import Footer from '../Components/Footer'
import Portfolio from '../Components/home/Portfolio'
import Blog from '../Components/home/Blog'


function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Services" element={<Services />}></Route>
      <Route path="/Contact" element={<Contacts />}></Route>
      <Route path="/Portfolio" element={<Portfolio />}></Route>
      <Route path="/Blog" element={<Blog/>}></Route>
     </Routes>
      
     </BrowserRouter>
     
     <Footer/>
    
    </div>
  )
}

export default App
