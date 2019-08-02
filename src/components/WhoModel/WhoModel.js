import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import './WhoModel.scss'

//  Components
import WhoItem from '../WhoItem/WhoItem'
import BgTextEtal from "../BgTextEtal/BgTextEtal"
import Social from '../Social/Social'
import Pagination from '../Pagination/Pagination'
import Scroll from '../Scroll/Scroll'

import map from '../../img/who/map.svg'
import emailImg from '../../img/contact-mail.svg'

class WhoModel extends Component {
    state = {
        mouseWheelDirection: ''
    }

    componentDidMount() {
        document.addEventListener('wheel', () => {
            this.setRedirect()
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    wheel(e) {
        e.preventDefault()

        var directionWheel = e.deltaY > 0 ? 'down' : 'up'

        this.setState({
            mouseWheelDirection: directionWheel
        })
    }

    renderRedirect = () => {
        if ( this.state.redirect && this.state.mouseWheelDirection === 'up' ) return <Redirect to='/whatpreloaderModel' />
    }


    render() {
        return (
            <main
                className="Who"
                onWheel = {(e) => this.wheel(e)}
            >
                {this.renderRedirect()}
                <BgTextEtal/>
                <Social/>
                <Pagination activePage={3} page="model"/>
                <div className="Who__map"></div>
                <div className="Who__contact-us">Contuct us</div>
                <div className="Who__email">
                    <div className="Who__email_title">
                        <img src={emailImg} className="Who__email_title-img" />
                        <span className="Who__email_title-text">E-mail</span>
                    </div>
                    <a className="Who__email-link" href="mailto:Info@etalonium.com">Info@etalonium.com</a>
                </div>
            </main>
        );
    }
}

export default WhoModel;
