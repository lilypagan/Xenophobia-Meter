import React from 'react';
import { AllStyles } from '../style/GeneralStyles';
import testerTerminology from '../data/testerTerminology';

class TerminologyBox extends React.Component {
  render() {
    const terms = testerTerminology[this.props.region].join(', ')
    
    return (
      <AllStyles>
        <div className="terminology-section">
          <h5 className="bold-text">Terminology</h5>
          <p>Top terms referencing foreigners that appear in tweets in 2020</p>
          <p className="italic-text bold-text terms-list">{terms}</p>
          <div className="clear"></div>
          <p className="italic-text section-notes">How do we classify xenophobic sentiment? Learn more through our <a href="methdology" className="underline-text-link">Methodology</a> page.</p>
        </div>
      </AllStyles>
    );
  }
}

export default TerminologyBox;