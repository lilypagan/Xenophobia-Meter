import React from 'react';
import { WorldMapStyle } from '../style/VisStyles'

class ToolTip extends React.Component {
  render() {
    var percText = ""
    if (this.props.percentage == 0) {
      percText = "No verified tweets referencing foreigners"
    } else {
      percText = Math.round(this.props.percentage) + "% of foreigner-related tweets scored as negative"
    }
    return(
      <WorldMapStyle>
        <div className="tooltip-container">
          <p className="country-name">{this.props.countryName}</p>
          <p className="percentage-negative">{percText}</p>
        </div>
      </WorldMapStyle>
    )
  }
}

export default ToolTip;