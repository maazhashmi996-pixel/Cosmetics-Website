import React from 'react'
import Navbar from '../Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../home/Home'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/Home" element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
    
    </div>
  )
}

export default App
