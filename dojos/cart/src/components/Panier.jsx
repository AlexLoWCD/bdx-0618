import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import ArticlePanier from './ArticlePanier';
import './Panier.css';

const Panier = ({ articles, totalPanier }) => {
  const clsTotalPanier = ClassNames('total-panier', {
    hidden: articles.length === 0,
  });

  return (
    <div className="Panier">
      <div className="title"> Mon Panier </div>
      {articles.map(a => <ArticlePanier key={a.name} article={a} />)}
      <div className={clsTotalPanier}>
        Total: {totalPanier.toFixed(2)}€
      </div>
    </div>
  );
};

Panier.propTypes = {
  totalPanier: PropTypes.number.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    unitPrice: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default Panier;
