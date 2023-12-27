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
import Contactus from "./pages/Contactus";
import Writetous from "./pages/Writetous";
import ListyourBrand from "./pages/ListyourBrand";
import Collab from "./pages/Collab";
import Careers from "./pages/Careers";
import HelpandSupport from "./pages/HelpandSupport";
import Business from "./pages/Business";
import Featured from "./pages/Featured";
import TermsAndConditions from "./pages/TermsAndConditions";
import Privacy from "./pages/Privacy";


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
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/writetous" element={<Writetous/>} />
        <Route path="/collab" element={<Collab/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/listyourbrand" element={<ListyourBrand/>} />
        <Route path="/support" element={<HelpandSupport/>} />
        <Route path="/featured" element={<Featured/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />

        <Route path="/careers" element={<Careers/>} />
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
