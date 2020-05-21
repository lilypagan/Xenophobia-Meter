import React from 'react';
import NavigationBar from '../components/NavigationBar';

export const CountryPage = (props) => (
  <React.Fragment>
    <NavigationBar activePage="home"/>
    <div>
      <h4>{props.countryName}</h4>

    </div>
  </React.Fragment>
)