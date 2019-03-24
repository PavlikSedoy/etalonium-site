import React, { Component } from 'react';
import Layout from './hoc/Layout'
import './App.scss';

//Libarys
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Components
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <Layout>
          <BrowserRouter>
              <Switch>
                  <Route path={'/'} component={Home} />
              </Switch>
          </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
