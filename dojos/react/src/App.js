import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Container from './Container';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title : "Mon titre"
    }

    this.titleChange = this.titleChange.bind(this);
  }

  titleChange(newTitle) {
    this.setState({ title: newTitle});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Title myCurrentTitle={this.state.title} />
          <Container onTitleChange={this.titleChange} />
        </div>
      </div>
    );
  }
}

export default App;
