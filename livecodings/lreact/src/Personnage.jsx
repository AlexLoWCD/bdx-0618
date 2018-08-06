import React, {Component} from 'react';

class Personnage extends Component {
    render() { 
        const { perso } = this.props;
        return ( 
            <li className="Personnage">
                {perso.name} / {perso.alias} / {perso.age}
            </li>
        )
    }
}
 
export default Personnage;