// 
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "../Components/About";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/About" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

