import React from 'react'
import './Header.scss'

//Liberys
import { BrowserRouter, Link, NavLink} from 'react-router-dom'

//Components
import Home from "../Home/Home";

const Header = () => {
    return (
        <header className="Header">
            <BrowserRouter>
                <div className="Header__left-side">
                    <div className="Header__logo">
                        <Link to={Home} className="Header__logo_link">
                            <img className="Header__logo_img" src="../../logo.svg" alt="Etalonium"/>
                        </Link>
                    </div>
                </div>
                <div className="Header__right-side">
                    <nav className="Header__nav">
                        <NavLink
                            to="/what"
                            className="Header__nav-link"
                        >What</NavLink>
                        <NavLink
                            to="/forwho"
                            className="Header__nav-link"
                        >For who</NavLink>
                    </nav>
                    <div className="Header__hamburger Hamburger">
                        <div className="Hamburger__line Hamburger__top-line"></div>
                        <div className="Hamburger__line Hamburger__center-line"></div>
                        <div className="Hamburger__line Hamburger__bottom-line"></div>
                    </div>
                </div>
            </BrowserRouter>
        </header>
    )
}

export default Header