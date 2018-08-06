import React, { Component } from 'react';
import ListArticles from './components/ListArticles';
import Panier from './components/Panier';

import logo from './logo.svg';
import './App.css';

const arts = [{
  img: 'images/bananes.png',
  name: 'Bananes',
  price: 1.50,
  qty: 3,
}, {
  img: 'images/pommes.png',
  name: 'Pommes',
  price: 0.50,
  qty: 2,
}, {
  img: 'images/poires.png',
  name: 'Poires',
  price: 1.20,
  qty: 8,
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesPanier: [],
      total: 0,
    };

    this.ajoutArticle = this.ajoutArticle.bind(this);
  }

  ajoutArticle(article) {
    let { articlesPanier, total } = { ...this.state };
    const findArticle = articlesPanier.find(a => a.name === article.name);
    if (findArticle) {
      const qty = findArticle.qty + 1;
      articlesPanier = articlesPanier.map((art) => {
        if (art.name === article.name) {
          return {
            ...art,
            qty,
          };
        }
        return art;
      });
    } else {
      articlesPanier.push({
        name: article.name,
        unitPrice: article.price,
        qty: 1,
      });
    }
    total += article.price;
    this.setState({
      articlesPanier,
      total: parseFloat(total.toFixed(2)),
    });
  }

  render() {
    const articlesOutOfStock = this.state.articlesPanier.filter(a =>
      a.qty === arts.find(art => art.name === a.name).qty);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Shopping Cart</h1>
        </header>
        <ListArticles
          articles={arts}
          ajoutArticle={this.ajoutArticle}
          articlesOutOfStock={articlesOutOfStock}
        />
        <Panier articles={this.state.articlesPanier} totalPanier={this.state.total} />
      </div>
    );
  }
}

export default App;
