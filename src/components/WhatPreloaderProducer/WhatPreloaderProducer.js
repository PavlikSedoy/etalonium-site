import React, {Component} from 'react'
import './WhatPreloaderProducer.scss'

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
            return <Redirect to='/whatproducer' />
        }
    }


    render() {
        return (
            <main className="ForWhoPreloader">
                {this.renderRedirect()}
                <BgTextEtal/>
                <div className="ForWhoPreloader__title">
                    <div className="ForWhoPreloader__title_anim">
                        <h1>Support talents, help the fashion world get better!</h1>
                    </div>
                </div>
            </main>
        )
    }
}

export default ForWhoPreloaderModel