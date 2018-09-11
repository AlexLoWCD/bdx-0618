import React, { Component } from 'react';

import FormGame from './FormGame';

import { connect } from 'react-redux';
import { fetchGames, addGame } from '../actions/games';

class Gamepage extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchGames());
  }
  
  submitForm(values) {
    this.props.dispatch(addGame(values));
  }

  render() {
    return (
      <div className="Gamepage">
        {
          this.props.games.map(game => (
            <div key={game.id}>{game.name} / {game.platform_name}</div>
          ))
        }

        <FormGame onSubmit={this.submitForm}/>
      </div>
    );
  }
}

const mstp = ({ games }) => ({
  games: games.list
});

export default connect(mstp)(Gamepage);