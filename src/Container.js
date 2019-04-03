import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from './components/Home/Home'
import WhatPreloader from "./components/WhatPreloader/WhatPreloader";
import What from "./components/What/What";
import WhoPreloader from "./components/WhoPreloader/WhoPreloader";
import Who from "./components/Who/Who";


class Container extends Component {

    state = {
        whatRedirect: false,
        whoRedirect: false
    }

    updateWhatRedirect = () => {
        this.setState({
            whatRedirect: !this.state.whatRedirect
        })
    }

    render() {
        const { location } = this.props

        return (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    // transitionEnterTimeout={5000}
                    // transitionLeaveTimeout={3000}
                    timeout={{ enter: 5000, exit: 5000 }}
                    classNames={'fade'}
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route exact path={'/'} component={Home} />
                            <Route path={'/whatpreloader'} component={() => <WhatPreloader updateRedirect={this.updateWhatRedirect} /> } />
                            <Route path={'/what'} component={What} />
                            <Route path={'/whopreloader'} component={WhoPreloader} />
                            <Route path={'/who'} component={Who} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        )
    }
}

export default withRouter(Container)