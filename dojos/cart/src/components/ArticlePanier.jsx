import React from 'react';
import PropTypes from 'prop-types';

const ArticlePanier = ({ article }) => (
  <div className="ArticlePanier">
    <div className="row">
      <span>Désignation : </span>
      <span>{article.name}</span>
    </div>

    <div className="row">
      <span>Quantité : </span>
      <span>{article.qty}</span>
    </div>

    <div className="row">
      <span>Total : </span>
      <span>{(article.qty * article.unitPrice).toFixed(2)}€</span>
    </div>
  </div>
);

ArticlePanier.propTypes = {
  article: PropTypes.shape({
    name: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    unitPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default ArticlePanier;
