import React, {Component} from 'react'
import './WhatPreloaderAgent.scss'

import {Redirect} from 'react-router-dom'
import BgTextEtal from "../BgTextEtal/BgTextEtal";

class ForWhoPreloaderModel extends Component {

    componentDidMount() {
        setTimeout(this.setRedirect, this.props.timeOut)
    }

    setRedirect = () => {
        this.props.updateRedirect()
    }

    renderRedirect = () => {
        if (this.props.redirect) {
            return <Redirect to='/whatagent' />
        }
    }


    render() {
        return (
            <main className="ForWhoPreloader">
                {this.renderRedirect()}
                <BgTextEtal/>
                <div className="ForWhoPreloader__title">
                    <div className="ForWhoPreloader__title_anim">
                        <h1>EARN EASY! MORE TIME TO WORK THAN TO SEARCH!</h1>
                    </div>
                </div>
            </main>
        )
    }
}

export default ForWhoPreloaderModel