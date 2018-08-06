import {combineReducers} from 'redux';
import VillesReducer from './villes';
import VoyageursReducer from './voyageurs';

export default combineReducers({
  villes: VillesReducer,
  voyageurs: VoyageursReducer,
});