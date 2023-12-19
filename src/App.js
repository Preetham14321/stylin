import React, { useState, useEffect } from "react";


import { BrowserRouter, Routes, Route,  } from "react-router-dom";



import HomeLanding from "./pages/HomeLanding";
import Blogs from "./pages/Blogs";
import Team from "./pages/Team";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";


function App() {




  useEffect(() => {
    // Set smooth scrolling behavior on mount
    document.documentElement.style.scrollBehavior = 'smooth';
  
    // Clean up and restore original behavior on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <BrowserRouter>
        <ScrollToTop>

<Routes>
    <Route exact path="/" element={<HomeLanding />} />

        <Route path="/about" element={<About/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/blogs" element={<Blogs/>} />
        {/* Add more routes for your components/pages */}
  </Routes>
  </ScrollToTop>
  </BrowserRouter>
  )
}

export default App;
