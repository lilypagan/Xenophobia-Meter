import React from 'react';
import { FooterStyles } from '../style/GeneralStyles';

class Footer extends React.Component {
  render() {
    return (
      <FooterStyles>
        <div className="contact-links">
        <a href="https://twitter.com/XenophobiaMeter">
          <img alt="twitter icon" className="icon" src={require('../assets/twitter-icon.png')} />
        </a>
        <a href="https://twitter.com/XenophobiaMeter">
          <img alt="email icon" className="icon" src={require('../assets/email-icon.png')} />
        </a>
        </div>
      </FooterStyles>
    );
  }
}

export default Footer;