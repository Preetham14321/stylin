import React, { useState, useEffect } from "react";


import { BrowserRouter, Routes, Route,  } from "react-router-dom";



import HomeLanding from "./pages/HomeLanding";
import Blogs from "./pages/Blogs";


function App() {
  return (
    <BrowserRouter>

<Routes>
    <Route exact path="/" element={<HomeLanding />} />

        <Route path="/about" element={<Blogs/>} />
        {/* Add more routes for your components/pages */}
  </Routes>
  </BrowserRouter>
  )
}

export default App;
