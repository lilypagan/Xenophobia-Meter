import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavStyle } from '../style/GeneralStyles';

class NavigationBar extends React.Component {
  render() {
    return (
      <NavStyle>
        <Navbar expand="lg"> 
            <Navbar.Brand href={process.env.PUBLIC_URL + '/#'}>Xenophobia Meter Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 

            <div className="navbar-rightside">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" >
                  <Nav.Item><Nav.Link  className= {this.props.activePage==='home' ? 'active': ''} eventKey="home" href={process.env.PUBLIC_URL + '/#'}>Home</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='background' ? 'active': ''} eventKey="background" href={process.env.PUBLIC_URL + '/#/background'}>Background</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='methodology' ? 'active': ''} eventKey="methodology" href={process.env.PUBLIC_URL + '/#/methodology'}>Methodology</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='resources' ? 'active': ''} eventKey="resources" href={process.env.PUBLIC_URL + '/#/resources'}>Resources</Nav.Link></Nav.Item>
                </Nav>
              </Navbar.Collapse>

            </div>
        
        </Navbar>
      </NavStyle>
    );
  }
}

export default NavigationBar;
  