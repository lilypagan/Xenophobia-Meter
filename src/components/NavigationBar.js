import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavStyle } from '../style/GeneralStyles';

class NavigationBar extends React.Component {
  render() {
    return (
      <NavStyle>
        <Navbar expand="lg"> 
            <Navbar.Brand href="/">Xenophobia <br/> Meter Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 

            <div className="navbar-rightside">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" onSelect={(selectedKey) => this.togglePage(`${selectedKey}`)}>
                  <Nav.Item><Nav.Link  className= {this.props.activePage==='home' ? 'active': ''} eventKey="home" href="/">Home</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='background' ? 'active': ''} eventKey="background" href="/background">Background</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='methodology' ? 'active': ''} eventKey="methodology" href="/methodology">Methodology</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='about' ? 'active': ''} eventKey="about" href="/aboutus">About Us</Nav.Link></Nav.Item>
                </Nav>
              </Navbar.Collapse>
              <div className="contact-links">
                <a href="https://twitter.com/XenophobiaMeter">
                  <img alt="twitter icon" className="icon" src={require('../assets/twitter-icon.png')} />
                </a>
                <a href="https://twitter.com/XenophobiaMeter">
                  <img alt="email icon" className="icon" src={require('../assets/email-icon.png')} />
                </a>
              </div>
            </div>
        
        </Navbar>
      </NavStyle>
    );
  }
}

export default NavigationBar;
  