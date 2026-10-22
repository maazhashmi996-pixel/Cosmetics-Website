import React from 'react'
import Navbar from '../Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from '../Components/Home'
import Hair from '../Components/Hair'
import Article from '../Components/Article'
import Dye from '../Components/Dye'
import  Expert from '../Components/Expert'
import Hairstyle from '../Components/Hairstyle'
import Latest from '../Components/Latest'
import Comb from '../Components/Comb'
import Footer from '../Components/Footer'




function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Services" element={<Home/>}></Route>
      <Route path="/About" element={<Home/>}></Route>
      <Route path="/Contant" element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
     
      <Hair/>
       <Article/>
       <Dye/>
       <Expert/>
       <Hairstyle/>
       <Latest/>
       <Comb/>
      <Footer/>

    
    </div>
  )
}

export default App
