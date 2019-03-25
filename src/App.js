import React, { Component } from 'react';
import Layout from './hoc/Layout'
import './App.scss';

//Libarys
import { Route, Switch } from 'react-router-dom'

//Components
import Home from './components/Home/Home'
import WhatPreloader from "./components/WhatPreloader/WhatPreloader";
import What from "./components/What/What";
import WhoPreloader from "./components/WhoPreloader/WhoPreloader";

class App extends Component {
  render() {
    return (
      <Layout>
          <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/whatpreloader'} component={WhatPreloader} />
              <Route path={'/what'} component={What} />
              <Route path={'/whopreloader'} component={WhoPreloader} />
          </Switch>
      </Layout>
    );
  }
}

export default App;
