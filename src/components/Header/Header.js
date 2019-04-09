import React, { Component } from 'react'
import './Header.scss'

//Liberys
import { Link } from 'react-router-dom'

class Header extends Component {

    state = {
        isOpenMenu: false
    }

    clickHamburgerHandler = () => {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        })
    }

    hoverItemHandler = event => {
        var menuItem = event.target

        document.querySelectorAll('.Menu__item').forEach(
            (item) => item.classList.add('Menu__focused-out')
        )

        menuItem.parentNode.classList.add('Menu__focused')
    }

    hoverExitItemHandler = event => {
        var menuItem = event.target

        document.querySelectorAll('.Menu__item').forEach(
            (item) => item.classList.remove('Menu__focused-out')
        )

        menuItem.parentNode.classList.remove('Menu__focused')
    }

    render() {
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
                            <span className="Header__nav-text">About</span>
                        </Link>
                        <Link
                            to="/whopreloader"
                            className="Header__nav-link hover-bg"
                        >
                            <div className="hover-bg__bg"></div>
                            <span className="Header__nav-text">For who</span>
                        </Link>
                    </nav>
                    <div className={ this.state.isOpenMenu ? "Header__hamburger Hamburger active" : "Header__hamburger Hamburger" } onClick={this.clickHamburgerHandler}>
                        <div className="Hamburger__line Hamburger__top-line"></div>
                        <div className="Hamburger__line Hamburger__center-line"></div>
                        <div className="Hamburger__line Hamburger__bottom-line"></div>
                    </div>
                    <div className={ this.state.isOpenMenu ? "Menu active" : "Menu" }>
                        <div className="Menu__bg">
                            <div className="Menu__container">
                                <div className="Menu__first-row">
                                    <span className="Menu__menu-title">menu</span>
                                </div>
                                <div className="Menu__second-row">
                                    <nav className="Menu__nav">
                                        <ul className="Menu__ul">
                                            <li className="Menu__item">
                                                <a className="Menu__word" href="/" onMouseEnter={this.hoverItemHandler} onMouseLeave={this.hoverExitItemHandler}>Home</a>
                                                <div className="Menu__grayed">Home</div>
                                                <div className="Menu__numbering">01</div>
                                            </li>
                                            <li className="Menu__item">
                                                <a className="Menu__word" href="/" onMouseEnter={this.hoverItemHandler} onMouseLeave={this.hoverExitItemHandler}>What</a>
                                                <div className="Menu__grayed">What</div>
                                                <div className="Menu__numbering">02</div>
                                            </li>
                                            <li className="Menu__item">
                                                <a className="Menu__word" href="/" onMouseEnter={this.hoverItemHandler} onMouseLeave={this.hoverExitItemHandler}>For who</a>
                                                <div className="Menu__grayed">For who</div>
                                                <div className="Menu__numbering">03</div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="Menu__third-row">Third</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header