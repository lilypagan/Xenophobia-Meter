import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Layout } from '../components/Layout';

export const Home = () => (
  <React.Fragment>
    <NavigationBar activePage="home"/>
    <div>
      <div className="world-map-section">
        <h5>Xenophobic Sentiment on Twitter</h5>
        <p>Percentage of verified tweets per country that contain xenophobic sentiments.</p>
      </div>
    </div>
  </React.Fragment>

)