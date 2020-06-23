import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { AllStyles } from '../style/GeneralStyles';
import  { BackgroundPageStyle } from '../style/PageStyles';
import { Layout } from '../components/Layout';
import { Text, StyleSheet } from "react-native";
import Fade from 'react-reveal/Fade';

const styles = StyleSheet.create({
  sectionText: {
    fontSize: 19,
    fontFamily:'Muli, san-serif',
    color: "#434343",
  },
  bold: {
    fontWeight: "bold"
  },
  underline: {
    fontStyle: "italic"
  }
});

export const Background = () => (
  <React.Fragment>
    
    <AllStyles>
      <BackgroundPageStyle>
        <div className="page-header text-center">
          <Layout>
          <NavigationBar activePage="background"/>
          </Layout>
          <h2  className="header-title bold-text">Project Background</h2>
        </div>
        <Fade bottom>
        <div>
          <div className="background-section-center">
            <h4 >What is xenophobia?</h4>
            <br/>
            <Text style={styles.sectionText}>We use the Oxford Dictionary definition of xenophobia: <Text style={styles.underline}>“dislike of or prejudice against people from other countries.”</Text></Text>
            <p></p>
          </div>
          <div className="background-section">
            <div className="section-left">
              <h4 className="section-title">Our Mission</h4>
            </div>
            <div className="section-right">
              <h6 className="section-text">We built the Xenophobia Meter to shine a spotlight on xenophobia and government refusal to confront this uniquely destructive form of hate. Fear of foreigners separates families and puts children in cages. Understand xenophobia and take action to stop it today.</h6>
            </div>
          </div>
          <div className="background-section">
            <div className="section-left">
              <h4 className="section-title">Next Up</h4>
            </div>
            <div className="section-right">
              <h6 className="section-text">Stay tuned for our official launch with real Twitter data! In the next few weeks, we will be up and running with the following new features: <br/><br/>
          1. Date filtering 
          <br/>
          2. Display of real tweets, their sentiment scores and user feedback options
          <br/>
          3. Form to fight disinformation
          <br/>
          4. Monthly newsletter sign up
          <br/>
          5. Term submission
          <br/><br/>
          Connect with us on <a href="https://twitter.com/XenophobiaMeter" className="twitter-link">Twitter</a> to get updates on our work and the fight against xenophobia.
          </h6>
              
            </div>
          </div>
        </div>
        </Fade>
      </BackgroundPageStyle>
    </AllStyles>
  </React.Fragment>
)