import React, { Fragment} from 'react'
import './Layout.scss'

import Header from '../components/Header/Header'

import { BrowserRouter } from 'react-router-dom'

const supportsHistory = 'pushState' in window.history;

const Layout = (props) => (
    <BrowserRouter forceRefresh={!supportsHistory}>
        <Header/>
        <Fragment>{ props.children }</Fragment>
    </BrowserRouter>
)

export default Layout