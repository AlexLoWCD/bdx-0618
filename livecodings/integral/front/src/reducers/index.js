import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gamesReducer from './games';
import platformsReducer from './platforms';

const allReducers = combineReducers({
  games: gamesReducer,
  platforms: platformsReducer,
  form: formReducer,
});

export default allReducers;
