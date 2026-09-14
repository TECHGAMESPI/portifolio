import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Companies from './companies/Companies';
import PlexusBackground from './PlexusBackground';
import {copy, profile} from '../info/Content';

export default function BaseLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    const storedTheme = localStorage.getItem('jc-theme');
    const storedLang = localStorage.getItem('jc-lang');
    if (storedTheme) setDarkMode(storedTheme === 'dark');
    else setDarkMode(window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true);
    if (storedLang === 'en' || storedLang === 'pt') setLang(storedLang);
  }, []);

  const toggleTheme = () => setDarkMode(current => {
    localStorage.setItem('jc-theme', current ? 'light' : 'dark');
    return !current;
  });
  const toggleLang = () => setLang(current => {
    const next = current === 'pt' ? 'en' : 'pt';
    localStorage.setItem('jc-lang', next);
    return next;
  });
  const t = copy[lang];

  return (
    <div className={`${Style.shell} ${darkMode ? Style.dark : Style.light}`}>
      <PlexusBackground darkMode={darkMode}/>
      <Navbar darkMode={darkMode} lang={lang} toggleTheme={toggleTheme} toggleLang={toggleLang} t={t}/>
      <main className={Style.content}>
        <Routes>
          <Route path="/" element={<Home t={t}/>}/>
          <Route path="/about" element={<About t={t}/>}/>
          <Route path="/companies" element={<Companies t={t}/>}/>
          <Route path="/portfolio" element={<Portfolio t={t}/>}/>
        </Routes>
      </main>
      <footer className={Style.footer}>
        <div><strong>José Cândido</strong><span>{t.footer}</span></div>
        <div className={Style.footerLinks}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <small>© 2026</small>
      </footer>
    </div>
  );
}
