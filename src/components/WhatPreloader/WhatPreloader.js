import React, {Component} from 'react'
import './WhatPreloader.scss'

import {Redirect} from 'react-router-dom'

class ForWhoPreloader extends Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        setTimeout(this.setRedirect, 1000)
    }

    setRedirect = () => {
        var { redirect } = this.state

        redirect = true
        this.setState({ redirect })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/what' />
        }
    }


    render() {
        return (
            <main className="ForWhoPreloader">
                {this.renderRedirect()}
                <div className="ForWhoPreloader__title">
                    <h1>we create Etalonium Community for</h1>
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