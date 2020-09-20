import React from 'react';
import NavigationBar from '../components/NavigationBar';
import descriptions from '../data/testerCountryDes.js';
import sentiment_stats from '../data/testerCountryStats.js';
import { AllStyles } from '../style/GeneralStyles';
import  { CountryPageStyle } from '../style/PageStyles';
import { Text, StyleSheet } from "react-native";
import CountryLineGraph from '../visualizations/CountryLineGraph';
import TerminologyBox from '../components/TerminologyBox';
import Fade from 'react-reveal/Fade';

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

class CountryPage extends React.Component {
  render() {
    const country_info = descriptions[this.props.countryName]
    const country_mean = sentiment_stats['regions'][this.props.countryName]['mean_score']
    const country_median = sentiment_stats['regions'][this.props.countryName]['median_score']
    return(
      <React.Fragment>
        <NavigationBar activePage="home"/>
        <AllStyles>
          <CountryPageStyle>
          <Fade bottom>
            <div className="country-intro">
              <h4 className="bold-text">{this.props.countryName}</h4>
              <p className="country-desc">{country_info}</p>
            </div>
            <div className= "section-container">
              <h5 className="bold-text">Trends in Word Usage</h5>
              <p className="section-description">Number of verified tweets containing foreigner-related terms.</p>
              <CountryLineGraph countryName={this.props.countryName} />
              
            </div>
            <br></br>
            <div className= "section-container">
              <h5 className="bold-text">Sentiment Analysis Statistics</h5>
              <Text style={styles.visDescription}>All tweets are scored on a scale of <Text style={styles.bold}>-1 to 1</Text> based on the general positivity or negativity of its sentiments.</Text>
              <div>
                <div className="country-stat-container">
                  <p className="bold-text stats-num">{country_mean}</p>
                  <h5 className="bold-text ">Mean Score</h5>
                </div>
                <div className="country-stat-container">
                  <p className="bold-text stats-num">{country_median}</p>
                  <h5 className="bold-text">Median Score</h5>
                </div>
              </div>
              <br></br>
              <p className="italic-text section-notes">Learn more about our sentiment analysis through our <a href={process.env.PUBLIC_URL + '/#/methodology'} className="underline-text-link">Methodology</a> page.</p>
            </div>
            <TerminologyBox region="United States of America"/>
            </Fade>
          </CountryPageStyle>
        </AllStyles>
      </React.Fragment>
    )
  }
} 

export default CountryPage;