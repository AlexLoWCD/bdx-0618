import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListSuperHeroes extends Component {
    render() {
        return (
            <ul className={this.props.classList}>
                {
                    this.props.list.map((h, i) =>
                        <li key={i} onClick={this.props.handleClick}>
                            {h.username} / {h.password}
                        </li>
                    )
                }
            </ul>
        )
    }
}

ListSuperHeroes.propTypes = {
    classList: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired,
            isAlive: PropTypes.bool,
        }).isRequired
    ).isRequired,
}

ListSuperHeroes.defaultProps = {
    classList: "ListSuperHeroes"
}

export default ListSuperHeroes;