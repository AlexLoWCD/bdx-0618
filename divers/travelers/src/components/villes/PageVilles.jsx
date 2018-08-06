import React from 'react';
import {connect} from 'react-redux';
import Ville from './Ville';

import './PageVilles.css';

const PageVilles = ({villes}) => {
  return (
    <div className="PageVilles">
      {
        villes.map(v => <Ville key={v.id} ville={v} />)
      }
    </div>
  );
}

const mstp = state => ({
  villes: state.villes,
});
 
export default connect(mstp)(PageVilles);