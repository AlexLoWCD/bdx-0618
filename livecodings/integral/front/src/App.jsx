import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import Header from './containers/Header';
import Homepage from './containers/Homepage';
import Gamepage from './containers/Gamepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/games" component={Gamepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
