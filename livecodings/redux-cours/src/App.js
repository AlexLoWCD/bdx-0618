import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserList from './containers/UserList';
import UserDetail from './containers/UserDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <UserList />
          <UserDetail />

      </div>
    );
  }
}

export default App;
