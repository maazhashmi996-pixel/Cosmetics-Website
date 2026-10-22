import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contacts from '../Components/Contacts'
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


