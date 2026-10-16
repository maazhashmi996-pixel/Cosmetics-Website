import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Blog from '../Components/Blog'
function App() {
  return (
    <div>
     <BrowserRouter>
     <Blog/>
     <Routes>

     </Routes>
     </BrowserRouter>
    
    </div>
  )
}

export default App
