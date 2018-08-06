import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {toggleVisited} from '../../actions';
import './Ville.css';

const Ville = ({ville, voyageurs, toggleVisited}) => {
  const bgImage = `url("/images/${ville.name}.jpg")`;
  let clsVille = "Ville";

  if (ville.visited) {
    clsVille += " visited";
  }

  const voyageursPresents = voyageurs.filter(voyageur => {
    return voyageur.villes.includes(ville.id);
  });

  return (
    <div
      className={clsVille}
      style={{backgroundImage: bgImage}}
      onClick={() => toggleVisited(ville.id)}
    >
      <div className="fog" />
      <div className="infos">
        <div className="name">{ville.name}</div>
        <div className="voyageurs">
          {
            voyageursPresents.map(v => <div key={v.id}>{v.name}</div>)
          }
        </div>
      </div>
    </div>
  );
}

const mstp = state => ({
  voyageurs: state.voyageurs,
})

function mdtp(dispatch) {
  return bindActionCreators({toggleVisited}, dispatch);
}
 
export default connect(mstp, mdtp)(Ville);