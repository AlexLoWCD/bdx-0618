import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ article, outOfStock, ajoutArticle }) => {
  const clsArticle = Classnames('Article', {
    outOfStock,
  });

  return (
    <div className={clsArticle}>
      <div className="photo">
        <img src={article.img} alt={article.name} />
      </div>
      <div className="info">
        {article.name}
      </div>
      <div className="info">
        {article.price}€
      </div>
      <div className="options">
        {
          (!outOfStock) ?
            <button
              className="btn btn-add"
              onClick={
                () => {
                  ajoutArticle(article);
                }
              }
            >
              Ajouter
            </button>
            : <div className="btn">No stock</div>
        }
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  ajoutArticle: PropTypes.func.isRequired,
  outOfStock: PropTypes.bool,
};

Article.defaultProps = {
  outOfStock: false,
};

export default Article;
