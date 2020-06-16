import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavStyle } from '../style/GeneralStyles';

class NavigationBar extends React.Component {
  render() {
    return (
      <NavStyle>
        <Navbar expand="lg"> 
            <Navbar.Brand href='/'>Xenophobia Meter Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 

            <div className="navbar-rightside">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" onSelect={(selectedKey) => this.togglePage(`${selectedKey}`)}>
                  <Nav.Item><Nav.Link  className= {this.props.activePage==='home' ? 'active': ''} eventKey="home" href='/'>Home</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='background' ? 'active': ''} eventKey="background" href='/#/background'>Background</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='methodology' ? 'active': ''} eventKey="methodology" href='/#/methodology'>Methodology</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='resources' ? 'active': ''} eventKey="resources" href='/#/resources'>Resources</Nav.Link></Nav.Item>
                </Nav>
              </Navbar.Collapse>

            </div>
        
        </Navbar>
      </NavStyle>
    );
  }
}

export default NavigationBar;
  