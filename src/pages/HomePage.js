import React from 'react';
import { Text, StyleSheet } from "react-native";
import NavigationBar from '../components/NavigationBar';
import { AllStyles } from '../style/GeneralStyles';
import WorldMap from '../visualizations/WorldMap';
import  { HomePageStyles } from '../style/PageStyles';
import testerdata from '../data/testerWorldMap.js';
import TerminologyBox from '../components/TerminologyBox';

const styles = StyleSheet.create({
  visDescription: {
    fontSize: 18,
    fontFamily:'Muli'
  },
  bold: {
    fontWeight: "bold"
  },

  tweetText: {
    fontFamily:'Muli',
    fontSize: 15,
  }
});

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {}
  }

  
  render() {
    return(
      <React.Fragment>
        <NavigationBar activePage="home"/>
        <AllStyles>
          <HomePageStyles>
            <div className="intro-section">
              <h1 className="bold-text">Xenophobia Meter Project (MVP)-test2 </h1>
              
              <h5 className="italic-text">Challenging discrimination with data.</h5>
              <br/>
              <br/>
              <p className="intro-desc">We track xenophobic sentiment on Twitter, providing you with the tools to recognize and fight xenophobia in your community.</p>
              <p className="grey-text">Last Updated: {testerdata.last_updated}</p>
              <p className="grey-text">(Note: this MVP is currently using mock data only — real data to come shortly!)</p>          
            </div>

            <div className="section-container">
              <h5 className="bold-text">Worldwide Xenophobic Sentiment</h5>
              <Text style={styles.visDescription}>Percentage of verified tweets (per country) referencing foreigners that are scored as having a <Text style={styles.bold}>negative sentiment</Text></Text>
              <WorldMap />
              <p className="italic-text section-notes">Click on each country to explore more trends, statistics and terminology for that specific regions.</p>
            </div>

            <TerminologyBox region="world"/>

          </HomePageStyles>
        </AllStyles>
      </React.Fragment>
    )
  }
}

export default Home;