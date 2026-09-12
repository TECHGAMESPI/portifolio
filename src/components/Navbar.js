import React from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {NavLink} from "react-router-dom";
import {info} from "../info/Info";

const links = [
    {name: 'Início', to: '/'},
    {name: 'Sobre', to: '/about'},
    {name: 'Projetos', to: '/portfolio'}
];

export default function Navbar({darkMode, handleClick}) {
    return (
        <header className={Style.header}>
            <nav className={Style.nav}>
                <NavLink to="/" className={Style.brand} aria-label="Página inicial">
                    <span className={Style.logo}>{info.initials}</span>
                    <span className={Style.brandText}>
                        <strong>José Cândido</strong>
                        <small>Software Engineer</small>
                    </span>
                </NavLink>

                <div className={Style.actions}>
                    <div className={Style.links}>
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === '/'}
                                className={({isActive}) => isActive ? `${Style.link} ${Style.active}` : Style.link}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </div>
            </nav>
        </header>
    )
}
