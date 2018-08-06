import React from 'react';
import Personnage from './Personnage';

const List = ({list}) => (
    <ul className="List">
        {list.map((personnage, i) => <Personnage key={i} perso={personnage} />)}
    </ul>
)
 
export default List;