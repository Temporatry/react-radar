import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

class Chart extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [10, 0, 0, 0] };
  }

  reflashData = () => {
      const datas = [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10];
      this.setState({
        data: datas
      });
    //console.log(this.state.data[0]);
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.reflashData(),
        1000
      );
    }
  render() {
    let start = 0, end = 0, gap = 10, count = start;
    let refreshIntervalId = 0; // Interval refresh ID
    // Rader Data initial
    const graphData = new Array();
    graphData.push(1);
    graphData.push(2);
    graphData.push(3);
    graphData.push(4);
    graphData.push(5);
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

    // // function reflashData
    // const reflashData = () => {
    //   var arr = new Array();
    //   graphData[0] = Math.random(); //1 Attention
    //   graphData[1] = Math.random(); //2 Emotional Level
    //   graphData[2] = Math.random(); //3 Fatigue
    //   graphData[3] = Math.random(); //4 Stress
    //   graphData[4] = Math.random(); //5 Rational Level
    //   const datas = [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10];
    //   this.setState({
    //     data: datas
    //   });
    //   // Radar.update();
    //   //console.log(`${count} ${labelData[count]}`)
    //   count += gap;
    //   console.log(count+" "+gap);
    //   if (count >= (end - 1)) {
    //     console.log('end');
    //     count = 0;
    //     clearInterval(refreshIntervalId);
    //   }
    // }
    // // setInterval
    // // run data
    // start = 0; end =100; gap = 10; count = start;
    // refreshIntervalId = setInterval(reflashData, 1000);
    return (
      <div className="chart">
        Chart Componment
        <Radar data={chartRadarData} options={chartRadarOptions} />
      </div>
    );
  }
}

export default Chart;
