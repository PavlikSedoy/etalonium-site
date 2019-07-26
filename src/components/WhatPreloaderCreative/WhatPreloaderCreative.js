import React, {Component} from 'react'
import './WhatPreloaderCreative.scss'

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
            return <Redirect to='/whatcreative' />
        }
    }


    render() {
        return (
            <main className="ForWhoPreloader">
                {this.renderRedirect()}
                <BgTextEtal/>
                <div className="ForWhoPreloader__title">
                    <div className="ForWhoPreloader__title_anim">
                        <h1>Your dream is real and profitable here!</h1>
                    </div>
                </div>
            </main>
        )
    }
}

export default ForWhoPreloaderModel