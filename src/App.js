import React from 'react';
import Layout from './hoc/Layout'
import './App.scss';

//Libarys
import { Route, Switch } from 'react-router-dom'
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group'

//Components
import Home from './components/Home/Home'
import WhatPreloader from "./components/WhatPreloader/WhatPreloader";
import What from "./components/What/What";
import WhoPreloader from "./components/WhoPreloader/WhoPreloader";
import Who from "./components/Who/Who";

const App = () => (
  <Layout>
      <Route
          render={({ location }) => {
              const { pathname } = location;
              return (
                  <TransitionGroup>
                      <CSSTransitionGroup
                          key={pathname}
                          classNames="page"
                          timeout={1000}
                      >
                          <Route
                              location={location}
                              render={() => (
                                  <Switch>
                                      <Route exact path={'/'} component={Home} />
                                      <Route path={'/whatpreloader'} component={WhatPreloader} />
                                      <Route path={'/what'} component={What} />
                                      <Route path={'/whopreloader'} component={WhoPreloader} />
                                      <Route path={'/who'} component={Who} />
                                  </Switch>
                              )}
                          />
                      </CSSTransitionGroup>
                  </TransitionGroup>
              )
          }}
      />
  </Layout>
)

export default App;
