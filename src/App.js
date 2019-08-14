import React , {Component} from 'react';
import './App.css';
import BarChart from './BarChart'
import * as d3 from 'd3'

class App extends Component {
  state = {
    data: [12, 25, 30, 15, 26, 10, 7, 12, 64],
    width: 500,
    height: 400,
    scale: 20,
  }
  componentDidMount() {
    let csvData = require('./assets/dataset.csv');
    d3.csv(csvData).then(x => console.log(x))
  }

  render(){
    return ( 
    <div id="wrapper">
      <BarChart data={this.state.data} width={this.state.width} height={this.state.height} scale={this.state.scale}/>
    </div>
     )
  }
}

export default App;
