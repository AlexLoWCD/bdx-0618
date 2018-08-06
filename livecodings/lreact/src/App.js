import React, { Component } from 'react';
import List from './List';
import logo from './logo.svg';
import './App.css';

const listPersonnages = [{
  name: 'Bruce Banner',
  alias: 'Hulk',
  age: 28
}, {
  name: 'Tony Stark',
  alias: 'Iron Man',
  age: 35
}, {
  name: 'Henry Pym',
  alias: 'Ant Man',
  age: 29
}, {
  name: 'Peter Parker',
  alias: 'Spiderman',
  age: 22
}, {
  name: 'Peter Quill',
  alias: 'Star Lord',
  age: 26
}, {
  name: 'James Howlett',
  alias: 'Wolverine',
  age: 33
}, {
  name: 'Matt Murdok',
  alias: 'Daredevil',
  age: 34
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { listPersonnages }
    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(prop) {
    const newList = [...this.state.listPersonnages];
    newList.sort((a, b) => {
      if (a[prop] > b[prop]) {
        return 1;
      }

      if (a[prop] < b[prop]) {
        return -1;
      }

      return 0;
    });
    this.setState({
      listPersonnages: newList
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.sortBy.bind(this, 'name')}> sort by name </button>
          <button onClick={this.sortBy.bind(this, 'alias')}> sort by alias </button>
          <button onClick={this.sortBy.bind(this, 'age')}> sort by age </button>
        </header>
        <List list={this.state.listPersonnages} />
      </div>
    );
  }
}

export default App;
