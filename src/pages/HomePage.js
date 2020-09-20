import React from 'react';
import { Text, StyleSheet } from "react-native";
import NavigationBar from '../components/NavigationBar';
import { AllStyles } from '../style/GeneralStyles';
import WorldMap from '../visualizations/WorldMap';
import  { HomePageStyles } from '../style/PageStyles';
import testerdata from '../data/testerWorldMap.json';
import TerminologyBox from '../components/TerminologyBox';
import UserFeedback from '../components/UserFeedback';
import Fade from 'react-reveal/Fade';


const styles = StyleSheet.create({
  visDescription: {
    fontSize: 18,
    fontFamily:'Muli, san-serif',
  },
  mapExplainerTxt: {
    fontFamily:'Muli, san-serif',
    fontSize: 17,
  },
  bold: {
    fontWeight: "bold"
  },
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
          <Fade bottom>
            <div className="intro-section">
              <h1 className="bold-text">Xenophobia Meter Project </h1>
              
              <h5 className="italic-text">Challenging discrimination with data.</h5>
              <br/>
              <br/>
              <p className="intro-desc">We track xenophobic sentiment on Twitter, providing you with the data and resources to recognize and take action against xenophobia in your community.</p>
              <p className="grey-text">Last Updated: {testerdata.last_updated}</p>
                    
            </div>
            
            <div className="section-container">
              <h5 className="bold-text">Potentially Xenophobic Sentiment</h5>
              <Text style={styles.visDescription}>Percentage of verified tweets (per country) referencing foreigners that are scored as having a <Text style={styles.bold}>negative sentiment</Text></Text>
              <WorldMap />
              <p className="italic-text section-notes">Click on each country to explore more trends, statistics and terminology for that specific regions.</p>
            </div>
            
            <div className="map-explainer-container">
              <div className="map-explainer-main">
                <div className="map-explainer-left">
                  <h2 className="map-explainer-title bold-text">How is this map<br/> significant?</h2>
                </div>
                <div className="map-explainer-right">
                <Text style={styles.mapExplainerTxt}>
                  {/* Although sentiment analysis of hate speech is a complex and unresolved issue in the computing world, our display of positive and negative sentiments can still provide you with insight into how prevalent possibly xenophobic attitudes. <br/><br/>
               Through this visualization, we hope to reveal not the percentage of tweets that are anti-foreigner, but instead the percentage of tweets bringing up the topic of “foreigners” that are also using generically negative sentiment. This number will be an estimated reflection on the types of conversations that are happening online (for or against foreigners) and how that can shape the culture and policies in a region.
               <br/><br/><br/> */}
               <Text style={styles.bold}>So it’s a tweet mentioning foreigners with generally negative words surrounding it. Does that make it xenophobia?</Text>
               <br/><br/>
               Identifying this combination in a tweet does not make it (or the sender) xenophobic! The use of terms equating to “foreigners” with generally negative sentiment can occur for many different reasons — to express xenophobic sentiment, to report xenophobic behavior/incidents or for purely journalistic purposes. This variability in usage makes it impossible to deem such “negative” tweets as actually xenophobic. 
               <br/><br/>
              Traditionally xenophobic terms can also be re-appropriated by some to refer to themselves, as a symbol of strength and pride. This phenomenon has the potential to skew results — help us improve this by giving your feedback below!
              <br/><br/>
               *Note that we are only analyzing content from English-speaking countries, which excludes many other forms and outbreaks of global xenophobia.
               
               </Text>
                
                </div>
              </div>
              <p className="italic-text section-notes">Learn more about our sentiment analysis through our <a href={process.env.PUBLIC_URL + '/#/methodology'} className="underline-text-link">Methdology</a> page.</p>
            </div>
            <UserFeedback/>

            <div className= "to-resources-container">
              <h3 className="bold-text">Want to learn more and take action against xenophobia?</h3>
              <a href={process.env.PUBLIC_URL + '/#/resources'} className="underline-text-link"><h5 className="light-text">Here is a collection of resources to get you started!  </h5></a>
            </div>

            <TerminologyBox region="world"/>
            </Fade >
          </HomePageStyles>
        </AllStyles>
      </React.Fragment>
    )
  }
}

export default Home;