import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import heroReducer from './heroReducer';
import tileReducer from './tileReducer';

const rootReducer = combineReducers({
	game: gameReducer,
	hero: heroReducer,
	tiles: tileReducer
});

export default rootReducer;