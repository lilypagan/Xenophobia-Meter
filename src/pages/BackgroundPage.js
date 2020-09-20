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
    fontWeight: "bold",
    fontSize: 18,
    fontFamily:'Muli, san-serif',
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
          <div  className="header-container"><h1 className="header-title  bold-text">Project Background</h1></div>
        </div>
        <div className="triangle-down"></div>
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
              <h6 className="section-text">We built the Xenophobia Meter to shine a spotlight on xenophobia and government refusal to confront this uniquely destructive form of hate. Fear of foreigners separates families and puts children in cages. 
              Understand xenophobia and take action to stop it today.</h6>
            </div>
          </div>
          <div className="background-section">
            <div className="section-left">
              <h4 className="section-title">Q&A</h4>
            </div>
            <div className="section-right">
              
              <h6 className="section-text">
              <Text style={styles.bold}>Why can’t we trust social media to regulate themselves?</Text>
              <br></br>
              <br></br>
              While it is true that social media giants have engaged in efforts to moderate their own platforms and filter out malicious contents, their efforts leave much to be desired. As is the case with many regular for-profit companies, their main interest and function is to please their shareholders, making the task of policing and removing malicious content a low priority for tech giants. By asking them to self-regulate is a recipe for disaster.
              <br></br>
              <br></br>
              
              <Text style={styles.bold}>What makes this initiative different?</Text>
              <br></br>
              <br></br>
              Our initiative to fight xenophobia through data collection and analysis is arguably the most ambitious to date. This website delivers data that displays the volume of xenophobic tweets during any given period of time, providing you with a more holistic view of the conversations happening online surrounding immigrants, migrants and foreigners. Not only do we present these numbers and statistics, we also constantly look to improve our analysis through supervised machine learning mechanisms with the feedback that you provide on our ratings. We are hopeful that the insights we provide will have a persuasive effect on policy making, with the end goal being government pressure to recognize its patterns of anti-immigrant policies and an eventual domino effect of international reform in this space.
              <br></br>
              <br></br>
              
              <Text style={styles.bold}>How can you help us?</Text>
              <br></br>
              <br></br>
              We welcome all kinds of assistance. The easiest way to contribute is to provide us with your own ratings on tweets that we have classified to confirm or refute our system’s scoring. Any other feedback on our platform or analysis via email or Twitter is also welcomed and encouraged. The last and most crucial contribution is to take action using our data and tools and begin difficult conversations with friends, family and your government officials. We need your voice to create effective change, which will begin the shift towards immigrant friendly policy making and rhetoric.
              </h6>         
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
              <br></br>
              <br></br>
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