import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List';

const list = [{
  username: 'Thanos',
  isAlive: true
}, {
  username: 'Iron Man',
  password: 'CaptainIsGay',
  isAlive: true
}, {
  username: 'Hulk',
  password: 'HulkNotHappy!',
  isAlive: false
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickName = this.onClickName.bind(this);
  }

  onClickName() {
    console.log("Name clicked!!");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List list={list} />
      </div>
    );
  }
}

export default App;
