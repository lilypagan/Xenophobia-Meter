import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { VisSectionStyle } from '../style/GeneralStyles';
import WorldMap from '../components/WorldMap';

export const Home = () => (
  <React.Fragment>
    <NavigationBar activePage="home"/>
    <VisSectionStyle>
      <div>
        <div className="vis-section">
          <h5 className="vis-title">Xenophobic Sentiment on Twitter</h5>
          <p className="vis-description">Percentage of verified tweets per country that contain xenophobic sentiments.</p>
          <WorldMap />
        </div>
      </div>
    </VisSectionStyle>
  </React.Fragment>

)