import React, {Fragment} from 'react';
// import Layout from './hoc/Layout'
import './App.scss';

//Components
import Header from './components/Header/Header'
import Container from './Container'

import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (

    <Router>
        <Fragment>
            <Header/>
            <Container/>
        </Fragment>
    </Router>

)

export default App;
