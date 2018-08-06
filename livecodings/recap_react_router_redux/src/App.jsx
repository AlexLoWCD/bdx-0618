import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import PageAccueil from './components/accueil/PageAccueil';
import PageVilles from './components/villes/PageVilles';
import PageVoyageurs from './components/voyageurs/PageVoyageurs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={PageAccueil} />
          <Route path="/villes" component={PageVilles} />
          <Route path="/voyageurs" component={PageVoyageurs} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
