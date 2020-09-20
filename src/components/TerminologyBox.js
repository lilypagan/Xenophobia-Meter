import React from 'react';
import { AllStyles } from '../style/GeneralStyles';
import testerTerminology from '../data/testerTerminology';

class TerminologyBox extends React.Component {
  constructor() {
    super();
    this.state = {
      data: testerTerminology,
    }
  }

  componentDidMount() {
    var isMockData = true; //change this to toggle between mock and real data
    if (!isMockData) {
      this.getData();
    }
  }

  getData() {
    fetch(`/api/retrieve/${this.props.region}/terms/highest/10`).then(response =>
      response.json().then(data => {
        this.setState({data: data})
        console.log('response from api and setting new data')
      })
    )
  }

  render() {
    const terms = testerTerminology.terms.map((d,i) => {
      return <p className="term light-text">{d}</p>
    })

    return (
      <AllStyles>
        <div className="terminology-section">
          <h5 className="bold-text">Terminology</h5>
          <p>Most frequently used terms referencing foreigners that appear in 2020 tweets</p>
          <div className="terms-list">
            {terms}
          </div>
          
          <div className="clear"></div>
          
        </div>
      </AllStyles>
    );
  }
}

export default TerminologyBox;