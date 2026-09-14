import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import Style from './Navbar.module.scss';
import {profile} from '../info/Content';

export default function Navbar({darkMode, lang, toggleTheme, toggleLang, t}) {
  const [open, setOpen] = useState(false);
  const links = [['/',t.nav.home],['/about',t.nav.about],['/companies',t.nav.companies],['/portfolio',t.nav.projects]];
  return <header className={Style.header}>
    <nav className={Style.nav}>
      <NavLink to="/" className={Style.brand} onClick={()=>setOpen(false)} aria-label={t.nav.home}>
        <span className={Style.mark}><i/></span><span><strong>José Cândido</strong><small>Software Engineer</small></span>
      </NavLink>
      <button className={Style.menu} onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Menu"><span/><span/></button>
      <div className={`${Style.navigation} ${open ? Style.open : ''}`}>
        <div className={Style.links}>{links.map(([to,label])=><NavLink key={to} to={to} end={to==='/'} onClick={()=>setOpen(false)} className={({isActive})=>isActive?Style.active:''}>{label}</NavLink>)}</div>
        <div className={Style.tools}>
          <button onClick={toggleLang} aria-label="Change language">{lang === 'pt' ? 'EN' : 'PT'}</button>
          <button onClick={toggleTheme} aria-label="Alternar tema">{darkMode ? '☼' : '☾'}</button>
          <a className={Style.contact} href={profile.whatsapp} target="_blank" rel="noreferrer">{t.nav.contact}<span>↗</span></a>
        </div>
      </div>
    </nav>
  </header>;
}
