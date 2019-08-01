import React, {Component} from 'react'
import './CreativeHome.scss'

import { Redirect, NavLink } from "react-router-dom";

import Social from "../Social/Social";
import Pagination from "../Pagination/Pagination";
import Scroll from "../Scroll/Scroll";
import BgTextEtal from "../BgTextEtal/BgTextEtal"


class CreativeHome extends Component {
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
            return <Redirect to='/whatpreloadercreative' />
        }
    }

    render() {
        return (
            <main className="Home__main CreativeHome__main" onWheel = {(e) => this.wheel(e)}>
                <div className="CreativeHome__bg"></div>
                {this.renderRedirect()}
                <BgTextEtal />
                <Social white={true} />
                <Pagination activePage={1} white={true} page={'creative'} />
                <Scroll page="whatpreloadercreative" white={true} />
                <div className="Home HomeRoules">
                    <h1 className="HomeRoules__title">Make dream profitable</h1>
                </div>
            </main>
        )
    }
}

export default CreativeHome