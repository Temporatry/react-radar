import React, { Component } from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './Home/Home';
import Teest from './Teest/Teest'
import NotFound from './NotFound';

const Main = () => (
  <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Teest} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
