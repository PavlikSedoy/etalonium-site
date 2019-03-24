import React, {Component, Fragment} from 'react'
import './Layout.scss'

import Header from '../components/Header/Header'

class Layout extends Component{
    render() {
        return (
            <Fragment>
                <Header/>
                <main>{ this.props.children }</main>
            </Fragment>
        )
    }
}

export default Layout