import React from 'react';
import { Link } from 'react-router-dom';
import './PageAccueil.css';

const PageAccueil = () => {
  const stylePhoto = [
    'url("/images/arcachon.jpg")',
    'url("/images/bayonne.jpg")',
    'url("/images/bordeaux.jpg")',
    'url("/images/biarritz.jpg")',
    'url("/images/biscarosse.jpg")',
    'url("/images/dax.jpg")',
  ];

  return (
    <div className="PageAccueil">
      <div className="photos">
        {
          stylePhoto.map((photo, i) => (
            <div className="photo">
              <div className="image" style={{backgroundImage: photo}}/>
              <div className="fog" />
            </div>
          ))
        }
      </div>
      <div className="content">
        <Link to="/villes">
          <div className="tile">
            <span>Découvrir les villes</span>
          </div>
        </Link>

        <Link to="/voyageurs">
          <div className="tile">
            <span>Mes Voyageurs</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PageAccueil;