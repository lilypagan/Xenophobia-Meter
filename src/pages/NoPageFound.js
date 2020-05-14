import React from 'react';
import NavigationBar from '../components/NavigationBar';

export const NoPageFound = () => (
  <React.Fragment>
    <NavigationBar activePage="home"/>
    <div>
      <h4>Sorry, no page was found!</h4>
    </div>
  </React.Fragment>
)