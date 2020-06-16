import React from 'react';
import './style/GeneralStyles'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './pages/HomePage';
import { Background } from './pages/BackgroundPage';
import { Methodology } from './pages/MethodologyPage';
import { About } from './pages/AboutPage';
import { NoPageFound } from './pages/NoPageFound';
import { Layout } from './components/Layout';
import CountryPage  from './pages/CountryPage';
import worlddata from './data/worldMap';
import { Resources } from './pages/ResourcesPage';
import { Terminology } from './pages/TerminologyPage';

class App extends React.Component {
  render() {
    const countryPages = worlddata.features
      .map((d) => <Route path={"/country/"+d.properties.name} render={() => <CountryPage countryName={d.properties.name} />}/>
    )
    return (
      <React.Fragment>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/background" component={Background}/>
                <Route path="/methodology" component={Methodology}/>
                <Route path="/aboutus" component={About}/>
                <Route path="/resources" component={Resources}/>
                <Route path="/terminology" component={Terminology}/>
                {countryPages}
                <Route component={NoPageFound}/>
              </Switch>
            </Router>
          </Layout>
      </React.Fragment>
    );
  }
}

export default App;
