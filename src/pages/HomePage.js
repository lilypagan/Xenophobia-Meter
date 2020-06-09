import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { AllStyles } from '../style/GeneralStyles';
import WorldMap from '../visualizations/WorldMap';
import  { HomePageStyles } from '../style/PageStyles';

export const Home = () => (
  <React.Fragment>
    <NavigationBar activePage="home"/>
    <AllStyles>
      <HomePageStyles>
        <div className="intro-section">
          <h1 className="bold-text">Xenophobia Meter Project</h1>
          <h5 className="italic-text">Challenging discrimination with data.</h5>
          <br/>
          <br/>
          <p className="intro-desc">We track xenophobic sentiment on Twitter, providing you with the tools to recognize and fight xenophobia in your community.</p>
          <p className="grey-text">Last Updated: May 19th, 2020</p>     
        </div>

        <div className="vis-section">
          <h5 className="bold-text">Worldwide Xenophobic Sentiment</h5>
          <p className="vis-description">Percentage of verified tweets (per country) containing foreigner-related language, that are in a negative context.</p>
          <WorldMap />
        </div>

      </HomePageStyles>
    </AllStyles>

  </React.Fragment>

)