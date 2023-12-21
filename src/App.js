import React, { useState, useEffect } from "react";


import { BrowserRouter, Routes, Route,  } from "react-router-dom";



import HomeLanding from "./pages/HomeLanding";
import Blogs from "./pages/Blogs";
import Team from "./pages/Team";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import BlogEntry from "./components/blogs/blogentry/BlogEntry";
import OnlineServ from "./components/features/OnlineServ";
import AiandArServ from "./components/features/AiandArServ";
import SalonMang from "./components/features/SalonMang";
import StylinAca from "./components/features/StylinAca";
import StyleStu from "./components/features/StyleStu";
import BeautySto from "./components/features/BeautySto";


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
        <Route path="/blog/Entry" element={<BlogEntry/>} />
        <Route path="/feature/onlineservice" element={<OnlineServ/>} />
        <Route path="/feature/aiandarservice" element={<AiandArServ/>} />
        <Route path="/feature/salonservice" element={<SalonMang/>} />
        <Route path="/feature/stylinacad" element={<StylinAca/>} />
        <Route path="/feature/styleStu" element={<StyleStu/>} />
        <Route path="/feature/beautySto" element={<BeautySto/>} />
        
  </Routes>
  </ScrollToTop>
  </BrowserRouter>
  )
}

export default App;
