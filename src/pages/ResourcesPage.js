import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { AllStyles } from '../style/GeneralStyles';
import  { ResourcesPageStyle } from '../style/PageStyles';
import { Layout } from '../components/Layout';
import Fade from 'react-reveal/Fade';
import linksdata from '../data/NGOLinks.js';

class Resources extends React.Component {
  render() {
    const linksList = linksdata['links']
    const links = linksList.map((d) =>
  <p><a className="underline-text-link" href={d.link}>{d.name}</a> {d.description}</p>
    )
    return(
      <React.Fragment>
          <AllStyles>
            <ResourcesPageStyle>
              <div className="page-header text-center">
                <Layout>
                <NavigationBar activePage="resources"/>
                </Layout>
                <h2  className="header-title-sub bold-text">Resources</h2>
                <p className="italic-text header-subtitle">To help you effectively take action against xenophobia & hate speech.</p>
              </div>
              <Fade bottom>
              <div className="resource-section">
                <h4 className="bold-text">Educational</h4>
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
                <h4 className="bold-text">Organizations & Movements</h4>
                <br></br>
                {links}
              </div>
              
              
              </Fade>
            </ResourcesPageStyle>
          </AllStyles>
        </React.Fragment>
    )
  }
}

export default Resources;
  
