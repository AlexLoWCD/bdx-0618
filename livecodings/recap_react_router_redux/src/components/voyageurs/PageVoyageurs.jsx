import React from 'react';
import {connect} from 'react-redux';

import Voyageur from './Voyageur';

const PageVoyageurs = ({voyageurs}) => {
  return (
    <div className="PageVoyageurs">
      {
        voyageurs.map(v => <Voyageur key={v.id} voyageur={v} />)
      }
    </div>
  );
}

const mstp = state => ({
  voyageurs: state.voyageurs,
});
 
export default connect(mstp)(PageVoyageurs);