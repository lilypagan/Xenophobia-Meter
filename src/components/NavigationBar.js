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
                <Nav className="ml-auto" onSelect={(selectedKey) => this.togglePage(`${selectedKey}`)}>
                  <Nav.Item><Nav.Link  className= {this.props.activePage==='home' ? 'active': ''} eventKey="home" href='Xenophobia-Meter/#'>Home</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='background' ? 'active': ''} eventKey="background" href='Xenophobia-Meter/#/background'>Background</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='methodology' ? 'active': ''} eventKey="methodology" href='Xenophobia-Meter/#/methodology'>Methodology</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link className= {this.props.activePage==='resources' ? 'active': ''} eventKey="resources" href='Xenophobia-Meter/#/resources'>Resources</Nav.Link></Nav.Item>
                </Nav>
              </Navbar.Collapse>

            </div>
        
        </Navbar>
      </NavStyle>
    );
  }
}

export default NavigationBar;
  