import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import tileReducer from './tileReducer';

const rootReducer = combineReducers({
	hero: heroReducer,
	tiles: tileReducer
});

export default rootReducer;