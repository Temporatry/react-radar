import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';
import Chart from './component/Chart';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            NUTN OASE BRI Rardar System
          </p>
        </header>
        <Chart/>
      </div>
    );
  }
}

export default Home;
