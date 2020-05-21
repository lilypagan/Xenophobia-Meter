import React from 'react';
import './style/GeneralStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/HomePage';
import { Background } from './pages/BackgroundPage';
import { Methodology } from './pages/MethodologyPage';
import { About } from './pages/AboutPage';
import { NoPageFound } from './pages/NoPageFound';
import { Layout } from './components/Layout';
import { CountryPage } from './pages/CountryPage';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/background" component={Background}/>
                <Route path="/methodology" component={Methodology}/>
                <Route path="/aboutus" component={About}/>
                <Route path="/country" render={(props) => <CountryPage {...props} countryName="U.S." />}/>
                <Route component={NoPageFound}/>
              </Switch>
            </Router>
          </Layout>
      </React.Fragment>
    );
  }
}

export default App;
