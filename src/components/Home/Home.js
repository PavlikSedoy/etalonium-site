import React, {Component} from 'react'
import './Home.scss'

import Messenger from '../Messenger/Messenger'
import {NavLink} from "react-router-dom";

import videoIcon from '../../img/home-icons/video.svg'
import moreInfoIcon from '../../img/home-icons/document.svg'
import downloadIcon from '../../img/home-icons/download.svg'


class Home extends Component {

    componentDidMount() {
        this.phoneTilte(document, window)
    }

    phoneTilte = ($doc, $win) => {
        var screenWidth = $win.screen.width / 2,
            screenHeight = $win.screen.height / 2,
            $elems = $doc.getElementsByClassName("elem"),
            validPropertyPrefix = '',
            otherProperty = 'perspective(1000px)',
            elemStyle = $elems[0].style;

        if(typeof elemStyle.webkitTransform == 'string') {
            validPropertyPrefix = 'webkitTransform';
        } else if (typeof elemStyle.MozTransform == 'string') {
            validPropertyPrefix = 'MozTransform';
        }

        $doc.addEventListener('mousemove', function (e) {
            var centroX = e.clientX - screenWidth,
                centroY = screenHeight - (e.clientY + 13),
                degX = centroX * 0.02,
                degY = centroY * 0.012,
                $elem

            for (var i = 0; i < $elems.length; i++) {
                $elem = $elems[i];
                $elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
            };
        });
    }

    render() {
        return (
            <main>
                <div className="Home">
                    <div className="Home__messenger">
                        <Messenger news={[
                            'Welcome to Decentrilize Fashion World',
                            'Choose your creatives and promote them',
                            'Become a producer in world of fashion',
                            'Make Dream profitable'
                        ]}/>
                    </div>
                    <div className="wrapper elem Home__phone_wr" style={{
                        transform: 'perspective(600px) rotateY(0deg) rotateX(0deg)',
                    }}>
                        <div className="Home__phone-img_wr">
                            <img src="./img/mockup.png" alt="Etalonium"/>
                            <img src="./img/mockup.gif" alt="" className="Home__phone-gif"/>
                        </div>
                    </div>
                    <div className="Home__btn_wr">
                        <div className="Home__btn_left-side">
                            <div className="hover-bg">
                                <div className="hover-bg__bg"></div>
                                <span className="Home__btn_text"><img src={downloadIcon} alt="Etalonium"/> Download APP</span>
                            </div>
                        </div>
                        <div className="Home__btn_right-side">
                            <NavLink
                                to="/link"
                                className="hover-bg"
                            >
                                <div className="hover-bg__bg"></div>
                                <span className="Home__btn_text"><img src={moreInfoIcon} alt="Etalonium"/> More info</span>
                            </NavLink>
                            <div className="hover-bg">
                                <div className="hover-bg__bg"></div>
                                <span className="Home__btn_text"><img src={videoIcon} alt="Etalonium"/> Watch video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home