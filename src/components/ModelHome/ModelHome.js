import React, {Component} from 'react'
import './ModelHome.scss'

import { Redirect, NavLink } from "react-router-dom";

import Social from "../Social/Social";
import Pagination from "../Pagination/Pagination";
import Scroll from "../Scroll/Scroll";


class Home extends Component {
    state = {
        redirect: false,
        mouseWheelDirection: ''
    }

    componentDidMount() {
        document.addEventListener('wheel', () => {
            this.setRedirect()
        })
    }

    wheel(e) {
        var directionWheel = e.deltaY > 0 ? 'down' : 'up'

        this.setState({
            mouseWheelDirection: directionWheel
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect && this.state.mouseWheelDirection === 'down') {
            return <Redirect to='/whatpreloader' />
        }
    }

    render() {
        return (
            <main className="Home__main ModelHome__main" onWheel = {(e) => this.wheel(e)}>
                <div className="ModelHome__bg"></div>
                {this.renderRedirect()}
                <Social white={true} />
                <Pagination activePage={1} white={true} page={'model'} />
                <Scroll page="whatpreloader"/>
                <div className="Home">
                    <div className="Home__messenger">
                        Title
                    </div>
                    <div className="Home__btn_wr">
                        <div className="Home__btn_left-side">
                            <div className="hover-bg">
                                <div className="hover-bg__bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home