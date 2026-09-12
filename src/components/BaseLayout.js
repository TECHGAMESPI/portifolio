import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";

export default function BaseLayout() {
   const [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      const nextMode = !darkMode;
      localStorage.setItem('darkMode', String(nextMode));
      setDarkMode(nextMode);
   }

   useEffect(() => {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
         setDarkMode(savedMode === 'true');
         return;
      }

      const prefersDark = window.matchMedia &&
         window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      localStorage.setItem('darkMode', String(prefersDark));
   }, []);

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode}/>

         <Box component="main" className={Style.content}>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/portfolio" element={<Portfolio/>}/>
            </Routes>
         </Box>

         <footer className={Style.footer}>
            <span>© 2026 José Cândido</span>
            <span>Software • Infraestrutura • Segurança</span>
         </footer>
      </Box>
   )
}
