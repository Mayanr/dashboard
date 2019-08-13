import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    componentDidMount() {
        const data = this.props.data;
        // const csvData = d3.csv("./assets/dataset", function(x) {
        //     console.log(x);
        // });
        this.drawBarChart(data)
    }
    
    drawBarChart(data)  {

        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .style("border", "1px solid black")

        svgCanvas.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", 40)
                .attr("height", (datapoint) => datapoint * 20)
                .attr("fill", "orange")
                .attr("x", (datapoint, iteration) => iteration * 45)
                .attr("y", (datapoint) => this.props.height - datapoint * this.props.scale)

        svgCanvas.selectAll("text")
            .data(data).enter()
            .append("text")
            .attr("x", (dataPoint, i) => i * 45 + 10)
            .attr("y", (dataPoint, i) => this.props.height - dataPoint * this.props.scale - 10)
            .text(dataPoint => dataPoint)
        
            
        }
        render() { 
        return <div ref="canvas"> </div> 
    }
}
export default BarChart