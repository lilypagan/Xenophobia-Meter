import React from 'react';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { CountryLineGraphStyle } from "../style/VisStyles";
import { AllStyles } from '../style/GeneralStyles';

class Line extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.colors = ["#8dd3c7","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"];
  }

  componentDidMount() {
    const node = this.ref.current;
    const { xScale, yScale, data, lineGenerator, term, index } = this.props
    
    const initialData = data.map(d => ({
      name: d.name,
      value: 0
    }));

    select(node)
    .append('path')
    .datum(initialData)
    .attr('id', `${term}-line`)
    .attr('stroke-width', 2)
    .attr('fill', 'none')
    .attr('d', lineGenerator)
    .attr("stroke", this.colors[`${index}`])
    

    this.updateChart()

  }
  
  componentDidUpdate() {
    this.updateChart()
  }

  updateChart() {
    const { lineGenerator, xScale, yScale, data, term } = this.props;

    const t= transition().duration(1000);

    const line = select(`#${term}-line`)
    
    line
      .datum(data)
      .transition(t)
      .attr('d', lineGenerator)

  }
  render() {
    
    return (
          <g className ="line-container" ref = {this.ref} />
        
    )
  }
}

export default Line;