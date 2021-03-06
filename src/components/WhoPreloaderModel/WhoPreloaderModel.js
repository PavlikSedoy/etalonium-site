import React, {Component} from 'react'

import {Redirect} from 'react-router-dom'
import BgTextEtal from "../BgTextEtal/BgTextEtal";

class WhoPreloader extends Component {

    state = {
        redirect: false
    }

    componentDidMount() {
        setTimeout(this.setRedirect, 3000)
    }

    setRedirect = () => {
        var { redirect } = this.state

        redirect = true
        this.setState({ redirect })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/whomodel' />
        }
    }


    render() {
        return (
            <main className="ForWhoPreloader who">
                {this.renderRedirect()}
                <BgTextEtal/>
                <div className="ForWhoPreloader__title who">
                    <h1>Support talents, invest in fashion development.</h1>
                </div>
            </main>
        )
    }
}

export default WhoPreloader