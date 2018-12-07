import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

// global variable
let start = 0, end = 0, gap = 10, count = start;
let refreshIntervalId = 0; // Interval refresh ID
let labelData; // selected file(label.csv) data
class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [10, 0, 0, 0] };
  }

  // set Interval reflash data function
  reflashData = () => {
    const datas = [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10];
    this.setState({
      data: datas
    });
  }
  // set Interval event
  componentDidMount() {
    refreshIntervalId = setInterval(
      () => this.reflashData(),
      1000
    );
  }
  // stop button function
  callStop = () => {
    clearInterval(refreshIntervalId);
    console.log('stopID: ' + refreshIntervalId);
  }
  

  render() {
    // Rader config initial
    const chartRadarData = {
      labels: ['Attention', 'Emotional Level', 'Fatigue', 'Stress', 'Rational Level'],
      datasets: [{
        label: 'Level',
        backgroundColor: 'rgba(255, 0, 0,0.4)',
        borderColor: 'rgba(255,0,0,.6)',
        pointBackgroundColor: 'rgba(63,63,74,1)',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0,0,0,0.3)',
        pointBorderWidth: 5,
        data: this.state.data
      }]
    };
    const chartRadarOptions =
    {
      scale:
      {
        ticks:
        {
          fontSize: 15,
          beginAtZero: true,
          maxTicksLimit: 7,
          min: 0,
          max: 10
        },
        pointLabels:
        {
          fontSize: 16,
          color: '#0044BB'
        },
        gridLines:
        {
          color: '#009FCC'
        }
      }
    };

    return (
      <div className="chart">
        Chart Componment
        <Radar data={chartRadarData} options={chartRadarOptions} />
        <button onClick={this.callStop}>Stop</button>
      </div>
    );
  }
}

export default Chart;
