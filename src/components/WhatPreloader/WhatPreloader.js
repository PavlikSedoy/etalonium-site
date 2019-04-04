import React, {Component} from 'react'
import './WhatPreloader.scss'

import {Redirect} from 'react-router-dom'
import BgTextEtal from "../BgTextEtal/BgTextEtal";

class ForWhoPreloader extends Component {

    componentDidMount() {
        setTimeout(this.setRedirect, this.props.timeOut)
    }

    setRedirect = () => {
        this.props.updateRedirect()
    }

    renderRedirect = () => {
        if (this.props.redirect) {
            return <Redirect to='/what' />
        }
    }


    render() {
        return (
            <main className="ForWhoPreloader">
                {this.renderRedirect()}
                <BgTextEtal/>
                <div className="ForWhoPreloader__title">
                    <div className="ForWhoPreloader__title_anim">
                        <h1>we create Etalonium Community for</h1>
                    </div>
                </div>
                <div className="ForWhoPreloader__desc_wr">
                    <div className="ForWhoPreloader__desc_item">
                        <span className="ForWhoPreloader__desc_item_text">
                            finding models
                        </span>
                    </div>
                    <div className="ForWhoPreloader__desc_item">
                        <span className="ForWhoPreloader__desc_item_text">
                            navigate to your sucСess
                        </span>
                    </div>
                    <div className="ForWhoPreloader__desc_item">
                        <span className="ForWhoPreloader__desc_item_text">
                            promote creatives
                        </span>
                    </div>
                </div>
            </main>
        )
    }
}

export default ForWhoPreloader