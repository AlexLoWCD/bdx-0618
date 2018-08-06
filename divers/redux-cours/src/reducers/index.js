import {combineReducers} from 'redux';

import UserReducer from './users';
import ActiveUserReducer from './active-user';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer,
});

export default allReducers;