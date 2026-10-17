import React from 'react'
import Navbar from '../Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../home/Home'
import Hair from '../home/Hair'
import Article from '../home/Article'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/Home" element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
      <Hair/>
      <Article/>
    
    </div>
  )
}

export default App
