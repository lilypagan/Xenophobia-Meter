import React from 'react';
import './style/GeneralStyles'
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import  Home  from './pages/HomePage';
import { Background } from './pages/BackgroundPage';
import { Methodology } from './pages/MethodologyPage';
import { About } from './pages/AboutPage';
import { NoPageFound } from './pages/NoPageFound';
import { Layout } from './components/Layout';
import CountryPage  from './pages/CountryPage';
import worlddata from './data/worldMap';
import { Resources } from './pages/ResourcesPage';

class App extends React.Component {
  render() {
    const countryPages = worlddata.features
      .map((d) => <Route path={"/country/"+d.properties.name} render={() => <CountryPage countryName={d.properties.name} />}/>
    )
    return (
      <React.Fragment>
          <Layout>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/background" component={Background}/>
                <Route path="/Xenophobia-Meter/methodology" component={Methodology}/>
                <Route path="/Xenophobia-Meter/aboutus" component={About}/>
                <Route path="/Xenophobia-Meter/resources" component={Resources}/>
                {countryPages}
                <Route component={Home}/>
              </Switch>
            </BrowserRouter>
          </Layout>
      </React.Fragment>
    );
  }
}

export default App;
