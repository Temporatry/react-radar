import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './component/Chart';
class App extends Component {
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

export default App;
