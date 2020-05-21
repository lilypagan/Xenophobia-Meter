import React from 'react';

class Country extends React.Component {
  render() {
    return(
      <h3>{this.props.countryName}</h3>
      
    )
  }
}

export default Country;