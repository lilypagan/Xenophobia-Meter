import React from "react";
import { select, selectAll } from "d3-selection";
import { axisBottom, axisLeft } from "d3-axis";
import { transition } from 'd3-transition';

class Axis extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
    const {scale, orientation, ticks} = this.props;
    const node = this.ref.current;
    let axis;

    if (orientation === "bottom") {
      axis = axisBottom(scale);
    }
    if (orientation === "left") {
      axis = axisLeft(scale)
      .ticks(ticks);
    }
    select(node).call(axis);
  }

  render() {
    const { orientation, transform } = this.props;
    return(
      <g
        ref={this.ref}
        transform={transform}
        className={`${orientation} axis`}
      />
    )
  }
}

export default Axis;