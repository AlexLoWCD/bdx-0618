import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

import './ListArticle.css';

class ListArticles extends Component {
  isOutOfStock(art) {
    return this.props.articlesOutOfStock.find(a => a.name === art.name) !== undefined;
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="ListArticles">
        <div className="header">
          <div> Photo </div>
          <div> Désignation </div>
          <div> Prix unitaire </div>
          <div />
        </div>
        {articles.map(a => (
          <Article
            key={a.name}
            article={a}
            ajoutArticle={this.props.ajoutArticle}
            outOfStock={this.isOutOfStock(a)}
          />
        ))}
      </div>
    );
  }
}

ListArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  ajoutArticle: PropTypes.func.isRequired,
  articlesOutOfStock: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
  })),
};

ListArticles.defaultProps = {
  articlesOutOfStock: [],
};

export default ListArticles;
