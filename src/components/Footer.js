import React from 'react';
import { FooterStyles } from '../style/GeneralStyles';
import { AllStyles } from '../style/GeneralStyles';

class Footer extends React.Component {
  render() {
    return (
      <AllStyles>
        <FooterStyles>
          <div className="footer-container">
            <div className="footer-left">
              <h4 className="white-text bold-text">Xenophobia Meter Project</h4>
              <h6 className="italic-text white-text footer-slogan">Challenging discrimination through data.</h6>
            </div>
            <div className="footer-right">
              <h5 className="white-text">Contact Us</h5>
              <div className="link-container"></div>
                <a href="https://twitter.com/XenophobiaMeter" className="link-text">
                  <img alt="twitter icon" className="icon" src={require('../assets/twitter-icon.png')} />
                  <p className="link-text">@XenophobiaMeter</p>
                </a>
                
              {/* <div className="link-container">
                <a href="https://twitter.com/XenophobiaMeter">
                  <img alt="email icon" className="email-icon" src={require('../assets/email-icon.png')} />
                  <p>xenophobia-meter@cornell.edu</p>
                </a>
              </div> */}
            </div>
          </div>
        </FooterStyles>
      </AllStyles>
    );
  }
}

export default Footer;