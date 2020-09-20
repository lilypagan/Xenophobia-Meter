import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { AllStyles } from '../style/GeneralStyles';
import  { ResourcesPageStyle } from '../style/PageStyles';
import { Layout } from '../components/Layout';
import Fade from 'react-reveal/Fade';
import linksdata from '../data/NGOLinks.js';
import { Button } from '@material-ui/core';
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectionText: {
    fontSize: 19,
    fontFamily:'Muli, san-serif',
    color: "#434343",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily:'Muli, san-serif',
  },
  underline: {
    fontStyle: "italic"
  }
});

class Resources extends React.Component {
  render() {
    const linksList = linksdata['links']
    const links = linksList.map((d) =>
    
      <div className="org-container">
        <a className="no-dec-link " target="_blank" href={d.link}>
          <p ><Text style={styles.bold}>{d.name}</Text> {d.description}</p>
        </a>
      </div>
    
    )
    return(
      <React.Fragment>
          <AllStyles>
            <ResourcesPageStyle>
            <div className="page-header text-center">
                <Layout>
                <NavigationBar activePage="resources"/>
                </Layout>
                <div  className="header-container">
                  <h1 className="header-title  bold-text">Resources</h1>
                  <p className="italic-text header-subtitle">Your voice matters. <br></br>Learn about and fight against xenophobic hate.</p>
                </div>
                

              </div>
              <div className="triangle-down"></div>

              <Fade bottom>
              <div className="resource-section">
                <h3 className="bold-text">Learn</h3>
                <a className="article-link" href={process.env.PUBLIC_URL + '/#/COVID-article'}>
                <div className="article-container">
                  <p className="article-title bold-text">New Additions to the Xenophobia Database: Anti-Asian Hate in the Pandemic</p>
                  <p className="article-subtitle">June 2020  |  Beth Lyon</p>
                  <p className="article-teaser italic-text">One of the notorious images of the COVID-19 era was a Washington Post photograph of President’s Trump’s notes from a coronavirus briefing showing the word “Corona” was crossed out and replaced with the word “Chinese”...</p>
                </div>
                </a>
                {/* <div className="article-container"></div> */}
              </div>
              <div className="resource-section">
                <h3 className="bold-text">Organize</h3>
                <br></br>
                <div className="org-grid">
                {links}
                </div>
                
              </div>
              <div className="resource-section">
                <h3 className="bold-text">Take Action</h3>
                <br></br>
                <div className="action-item">
                  <h5>Contact your local representative (USA) </h5>
                  <p>You have the power to create the change you want to see. Speak to your representative today.</p>
                  <Button className="rep-button" target="_blank" variant="outlined" size="medium" href="https://myreps.datamade.us/index.html">FIND YOUR REP</Button>

                </div>
              </div>
              
              
              </Fade>
            </ResourcesPageStyle>
          </AllStyles>
        </React.Fragment>
    )
  }
}

export default Resources;
  
