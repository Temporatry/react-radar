import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Teest from './Teest/Teest'
import NotFound from './NotFound/NotFound'
// import NotFound from './NotFound/NotFound';

export default
@hot(module)
class Main extends Component {
  render() {
    return (
      // <div style={{ textAlign: 'center' }}>
      //   <h2>Hello, I`m ReactMaker.</h2>
      //   <p>To get started, edit containers/index.js</p>
      // </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Teest} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
