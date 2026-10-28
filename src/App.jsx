import React from 'react'
import Navbar from '../Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from '../about/About'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/About" element={<About/>}></Route>
     </Routes>
     </BrowserRouter>
    
    </div>
  )
}

export default App
