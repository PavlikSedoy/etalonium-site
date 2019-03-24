import React, { Component } from 'react';
import Layout from './hoc/Layout'
import './App.scss';

//Libarys
import { Route, Switch } from 'react-router-dom'

//Components
import Home from './components/Home/Home'
import ForWhoPreloader from "./components/ForWhoPreload/ForWhoPreload";
import ForWho from "./components/ForWho/ForWho";

class App extends Component {
  render() {
    return (
      <Layout>
          <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/forwhopreloader'} component={ForWhoPreloader} />
              <Route path={'/forwho'} component={ForWho} />
          </Switch>
      </Layout>
    );
  }
}

export default App;
