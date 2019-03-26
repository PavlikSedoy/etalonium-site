import React, {Component} from 'react'

import {Redirect} from 'react-router-dom'

class WhoPreloader extends Component {

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
            return <Redirect to='/who' />
        }
    }


    render() {
        return (
            <main className="ForWhoPreloader">
                {this.renderRedirect()}
                <div className="ForWhoPreloader__title">
                    <h1>Choose your <span className="text-red">Role</span></h1>
                </div>
            </main>
        )
    }
}

export default WhoPreloader