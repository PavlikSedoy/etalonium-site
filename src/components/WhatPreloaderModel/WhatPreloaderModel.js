import React, {Component} from 'react'
import './WhatPreloaderModel.scss'

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
            return <Redirect to='/whatmodel' />
        }
    }


    render() {
        return (
            <main className="ForWhoPreloader">
                {this.renderRedirect()}
                <BgTextEtal/>
                <div className="ForWhoPreloader__title">
                    <div className="ForWhoPreloader__title_anim">
                        <h1>SUCCESS IS POSSIBLE THAN EVER!</h1>
                    </div>
                </div>
            </main>
        )
    }
}

export default ForWhoPreloaderModel