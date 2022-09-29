
import { combineReducers } from 'redux';

import colorReducer from './colorReducer';


const reducers = combineReducers({
  colors: colorReducer,
});


export default reducers;

