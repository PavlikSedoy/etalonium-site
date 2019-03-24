import React, {Component, Fragment} from 'react'
import './Layout.scss'

import Header from '../components/Header/Header'

import { BrowserRouter } from 'react-router-dom'

class Layout extends Component{
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Fragment>{ this.props.children }</Fragment>
            </BrowserRouter>
        )
    }
}

export default Layout