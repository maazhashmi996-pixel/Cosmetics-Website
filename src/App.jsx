import React from 'react'
 
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Services from '../Components/Services'

function App() {
  return   ( 
<BrowserRouter>
<Routes>
<Route path="/Sevices" element={<Services />} />
</Routes>


</BrowserRouter>
  )
}


export default App;
