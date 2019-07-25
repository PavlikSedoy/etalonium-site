import React, { Component } from 'react'
import './Header.scss'

//Liberys
import { Link } from 'react-router-dom'

class Header extends Component {

    state = {
        isOpenMenu: false,
        isOpenForWho: false
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

    hoverForWhoItemHandler = event => {
        var menuItem = event.target

        document.querySelectorAll('.For-who__item').forEach(
            (item) => item.classList.add('For-who__focused-out')
        )

        menuItem.parentNode.classList.add('For-who__focused')
    }

    hoverForWhoExitItemHandler = event => {
        var menuItem = event.target

        document.querySelectorAll('.For-who__item').forEach(
            (item) => item.classList.remove('For-who__focused-out')
        )

        menuItem.parentNode.classList.remove('For-who__focused')
    }

    clickForWhoHandler = () => {
        this.setState({
            isOpenForWho: !this.state.isOpenForWho
        })
    }

    closeMenuOnHover = () => {
        this.setState({
            isOpenForWho: false
        })
    }

    closeMenuOnClickLink = () => {
        this.setState({
            isOpenMenu: false
        })
    }

    render() {
        return (
            <header className="Header">
                <div className="Header__left-side">
                    <div className="Header__logo">
                        <Link
                            to="/"
                            className="Header__logo_link"
                            onClick={this.closeMenuOnClickLink}
                        >
                            <img className="Header__logo_img" src="../../logo.svg" alt="Etalonium"/>
                        </Link>
                    </div>
                </div>
                <div className="Header__right-side">
                    <nav className="Header__nav">
                        <Link
                            to="/whatpreloader"
                            className="Header__nav-link hover-bg"
                            onClick={this.closeMenuOnClickLink}
                        >
                            <div className="hover-bg__bg"></div>
                            <span className="Header__nav-text">About</span>
                        </Link>
                        <Link
                            to="/whopreloader"
                            className="Header__nav-link hover-bg"
                            onClick={this.closeMenuOnClickLink}
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
                                        <ul className={ this.state.isOpenForWho ? "Menu__ul Menu__for-who-open" : "Menu__ul" }>
                                            <li className="Menu__item" onMouseEnter={this.closeMenuOnHover}>
                                                <Link
                                                    to='/'
                                                    className="Menu__word" 
                                                    onMouseEnter={this.hoverItemHandler}
                                                    onMouseLeave={this.hoverExitItemHandler}
                                                    onClick={this.closeMenuOnClickLink}
                                                >
                                                    Home
                                                </Link>
                                                <div className="Menu__grayed">Home</div>
                                                <div className="Menu__numbering">01</div>
                                            </li>
                                            <li className="Menu__item" onMouseEnter={this.closeMenuOnHover}>
                                                <Link
                                                    to='/whatpreloader'
                                                    className="Menu__word"
                                                    onMouseEnter={this.hoverItemHandler}
                                                    onMouseLeave={this.hoverExitItemHandler}
                                                    onClick={this.closeMenuOnClickLink}
                                                >
                                                    What
                                                </Link>
                                                <div className="Menu__grayed">What</div>
                                                <div className="Menu__numbering">02</div>
                                            </li>
                                            <li className="Menu__item">
                                                <span
                                                    className="Menu__word"
                                                    onMouseEnter={this.hoverItemHandler}
                                                    onMouseLeave={this.hoverExitItemHandler}
                                                    onClick={this.clickForWhoHandler}
                                                >
                                                    For who
                                                </span>
                                                <div className="Menu__grayed">For who</div>
                                                <div className="Menu__numbering">03</div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="Menu__third-row">
                                    <div className={ this.state.isOpenForWho ? "Menu__for-who-menu For-who" : "Menu__for-who-menu For-who disable" }>
                                        <ul className="For-who__ul">
                                            <li className="For-who__item">
                                                <Link
                                                    to='/model'
                                                    className="For-who__word"
                                                    onMouseEnter={this.hoverForWhoItemHandler}
                                                    onMouseLeave={this.hoverForWhoExitItemHandler}
                                                    onClick={this.closeMenuOnClickLink}
                                                >
                                                    Model
                                                </Link>
                                                <div className="For-who__grayed">Model</div>
                                                <div className="For-who__numbering">01</div>
                                            </li>
                                            <li className="For-who__item">
                                                <a className="For-who__word" href="/" onMouseEnter={this.hoverForWhoItemHandler} onMouseLeave={this.hoverForWhoExitItemHandler}>Fashion maker</a>
                                                <div className="For-who__grayed">Fashion maker</div>
                                                <div className="For-who__numbering">02</div>
                                            </li>
                                            <li className="For-who__item">
                                                <a className="For-who__word" href="/" onMouseEnter={this.hoverForWhoItemHandler} onMouseLeave={this.hoverForWhoExitItemHandler}>Agent</a>
                                                <div className="For-who__grayed">Agent</div>
                                                <div className="For-who__numbering">03</div>
                                            </li>
                                            <li className="For-who__item">
                                                <a className="For-who__word" href="/" onMouseEnter={this.hoverForWhoItemHandler} onMouseLeave={this.hoverForWhoExitItemHandler}>Producer</a>
                                                <div className="For-who__grayed">Producer</div>
                                                <div className="For-who__numbering">04</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Menu__contacts Contacts">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header