import React from 'react'
import './Header.scss'

//Liberys
import { Link, NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header className="Header">
            <div className="Header__left-side">
                <div className="Header__logo">
                    <Link to="/" className="Header__logo_link">
                        <img className="Header__logo_img" src="../../logo.svg" alt="Etalonium"/>
                    </Link>
                </div>
            </div>
            <div className="Header__right-side">
                <nav className="Header__nav">
                    <Link
                        to="/whatpreloader"
                        className="Header__nav-link hover-bg"
                    >
                        <div className="hover-bg__bg"></div>
                        <span className="Header__nav-text">What</span>
                    </Link>
                    <Link
                        to="/whopreloader"
                        className="Header__nav-link hover-bg"
                    >
                        <div className="hover-bg__bg"></div>
                        <span className="Header__nav-text">For who</span>
                    </Link>
                </nav>
                <div className="Header__hamburger Hamburger">
                    <div className="Hamburger__line Hamburger__top-line"></div>
                    <div className="Hamburger__line Hamburger__center-line"></div>
                    <div className="Hamburger__line Hamburger__bottom-line"></div>
                </div>
            </div>
        </header>
    )
}

export default Header