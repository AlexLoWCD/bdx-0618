import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string,
      isAlive: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired
}

class List extends Component {
  render() { 
    const name = this.props.name.split("");

    return (
      <div className="List">
      {this.props.name}
        {
          this.props.list.map(heros => {
            return (<div className={heros.isAlive === true ? 'test': ''} key={heros.username}>{heros.username}</div>)
          }
          )
        }
      </div>
    );
  }
}

List.defaultProps = {
  name: "Liste par défaut",
}

export default List;