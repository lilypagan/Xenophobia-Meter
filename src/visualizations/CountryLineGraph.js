import React from 'react';
import line_graph_data from '../data/testerCountryGraph.js';
import { scaleLinear, scaleBand } from 'd3-scale';
import { line, curveMonotoneX } from 'd3-shape';
import Axis from '../components/Axis';
import Line from '../components/Line';
import { select } from "d3-selection";
import { CountryLineGraphStyle } from '../style/VisStyles';
import { AllStyles } from '../style/GeneralStyles';
import { axisBottom, axisLeft } from "d3-axis";
import YearlyFilter from '../components/YearlyFilter';

class CountryLineGraph extends React.Component {
  
  constructor() {
    super();
    this.state = {
      xticks: ["Jan", "Feb", "Mar", "Apr", "May"],
      maxY: 0,
      minY: 0,
    }
  }

  componentDidMount() {
    this.findMaxY(line_graph_data["regions"][this.props.countryName][this.props.year])
  }

  findMaxY(data) {
    var max = 0;
    var min = Infinity;
    Object.keys(data).map(function(term) {
      var monthList = data[term]
      monthList.map(function(monthDict){
        Object.keys(monthDict).map(function(key){
          if (key == 'value') {
            var count = monthDict[key]
            if (count > max) {
              max = count;
            }
            if (count < min) {
              min = count;
            }
          }
        })
      }) 
    })
    this.setState({maxY : max, minY: min})
  }

  render() {
    const parentWidth = 1000;
    const parentHeight = 400;
    const margins = {
      top: 20,
      right: 20,
      bottom: 50,
      left: 80,
    };

    var width = parentWidth - margins.left - margins.right;
    var height = parentHeight - margins.top - margins.bottom;
    const yTicks = 5;
    const xTicks = this.state.xticks;
    const minY = this.state.minY;
    const maxY = this.state.maxY;
    const data = line_graph_data["regions"][this.props.countryName][this.props.year]
    const lineTranslate = width/12

    var svg = select(".country-line-graph")
      
    svg.append("text")
      .attr("transform",
      "translate(" + (width/2 + margins.left) + " ," + (height + margins.top + 50) + ")")
      .style("text-anchor", "middle")
      .attr("font-weight", 300)
      .text("Month");

    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .attr("font-weight", 300)
    .text("Tweet Count"); 

    const xScale = scaleBand()
    .domain(xTicks)
    .rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
    .domain([855, 203491])
    .range([height, 0])
    .nice();

    const lineGen = line()
    .x(d => xScale(d.name))
    .y(d => yScale(d.value))
    .curve(curveMonotoneX);

    const xSettings = {
      scale: xScale,
      orientation: 'bottom',
      transform: `translate(0, ${height})`,
    };

    const ySettings = {
      scale: yScale,
      orientation: 'left',
      transform: 'translate(0, 0)',
      ticks: 7,
    };

    const lines = Object.keys(data).map((term, i) => 
      <Line data={data[term]} xScale={xScale} 
      yScale={yScale} lineGenerator={lineGen} term={term} index={i}></Line>
    )

    Object.keys(data).map(function(term, i) {
      const yPosition = yScale(data[term][4]["value"]) + margins.top
      svg.append("text")
        // .attr("transform", "translate+ (width-margins.right-lineTranslate)+","+yPosition)
        .attr("transform", `translate(${width - margins.right + 5}, ${yPosition})`)
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .style("fill", "black")
        .attr("font-weight", 200)
        .text(term);
    })

    // function make_y_gridlines() {		
    //   return axisLeft(yScale)
    //     .ticks(5)
    // }

    // svg.append("g")			
    // .attr("class", "grid")
    // .attr('transform', `translate(${margins.left}, 0)`)
    // .attr('stroke', 'blue')
    // .call(make_y_gridlines()
    //     .tickSize(-width)
    //     .tickFormat("")
    // )
    
    return(
      <AllStyles>
        <CountryLineGraphStyle>
          <YearlyFilter />
          
          <div className="line-graph-countainer">
            <div>{this.state.height}</div>
            <svg
              className="country-line-graph"
              viewBox="0 0 1000 400"
            >
              <g transform={`translate(${margins.left}, ${margins.top})`}>
                <g className="country-graph-axes">
                  <Axis {...xSettings} />
                  <Axis {...ySettings} />
                </g>
                <g transform={`translate(${lineTranslate}, 0)`}>
                {lines}
                </g>
              </g>
            </svg>
          </div>
        </CountryLineGraphStyle>
      </AllStyles>
    );
  }
}

export default CountryLineGraph;