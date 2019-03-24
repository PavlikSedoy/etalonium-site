import React, {Component, Fragment} from 'react'
import './Layout.scss'

import Header from '../components/Header/Header'

class Layout extends Component{
    render() {
        return (
            <Fragment>
                <Header/>
                <div>{ this.props.children }</div>
            </Fragment>
        )
    }
}

export default Layout