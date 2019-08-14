import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    constructor() {
        super()
      }


    componentDidMount() {
        const data = this.props.data;
        this.drawBarChart(data)
    }

    drawBarChart(data)  {
        const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([0, this.props.height-50])
        const xScale = d3.scaleLinear().domain([0, 100]).range([ this.props.width, 0])
        console.log(xScale)
        const barWidth = (this.props.width-100)/data.length
        const barSpace = 100/data.length
        
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height)
            .style("border", "1px solid black")

        svgCanvas.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", barWidth)
                .attr("height", (datapoint) => datapoint * 20)
                .attr("fill", "orange")
                .attr("x", (datapoint, iteration) => iteration * (barWidth+barSpace))
                .attr("y", (datapoint) => this.props.height - yScale(datapoint))

        svgCanvas.selectAll("text")
            .data(data).enter()
            .append("text")
            .attr("x", (datapoint, i) => i * (barWidth+barSpace)+barWidth/3)
            .attr("y", (datapoint, i) => this.props.height - yScale(datapoint) - 10)
            .text(dataPoint => dataPoint)
        }
        render() { 
            
            return <div ref="canvas"> </div> 
    }
}
export default BarChart