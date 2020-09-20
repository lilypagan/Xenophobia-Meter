import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Fade from 'react-reveal/Fade';
import { Layout } from '../components/Layout';
import { AllStyles } from '../style/GeneralStyles';
import  { MethodologyPageStyles } from '../style/PageStyles';

export const Methodology = () => (
  <React.Fragment>
    <AllStyles>
      <MethodologyPageStyles>
      <div className="page-header text-center">
          <Layout>
          <NavigationBar activePage="methodology"/>
          </Layout>
          <div  className="header-container"><h1 className="header-title  bold-text">Methodology</h1></div>
        </div>
        <div className="triangle-down"></div>
        <Fade bottom>
          <div className="methodology-section">
            <div className="section-left">
              <h4 className="section-title">Sentiment Analysis</h4>
            </div>
            <div className="section-right">
              <h6 className="section-text">We first get the data through the Twitter API for all verified tweets and perform AFINN sentiment analysis on it. This analysis will give each word in a tweet a score between -5 and 5, which will be an indicator of how positive or negative its general sentiments are. These scores are then added together to come up with a general sentiment score for the tweet as a whole, which can be either negative, positive or 0.</h6>
            </div>
          </div>

          <div className="methodology-section">
            <div className="section-left">
              <h4 className="section-title">Potential Limitations</h4>
            </div>
            <div className="section-right">
              <h6 className="section-text">Although existing algorithms for sentiment analysis can be used to loosely recognize when hate speech is being used, it is nowhere near 100% accurate and cannot be used to reliably identify trends at the moment. These methods cannot fully comprehend the complexities of this type of language quite like humans can and only recognize general sentiment positively or negatively, which is also subjective based on many other factors. 
<br/><br/>
Given these drawbacks of sentiment analysis currently, we have also provided visualizations reflecting pure aggregated counts of xenophobic and foreigner related word usage on twitter. These can be found on each country’s page, which is linked through the home page heat map.
</h6>
            </div>
          </div>
        </Fade>
      </MethodologyPageStyles>
    </AllStyles>
  </React.Fragment>
)