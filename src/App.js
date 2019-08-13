import React , {Component} from 'react';
import './App.css';
import BarChart from './BarChart'

class App extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    scale: 20,
  }
  render(){
    return ( <BarChart data={this.state.data} width={this.state.width} height={this.state.height} scale={this.state.scale}/> )
  }
}

export default App;
