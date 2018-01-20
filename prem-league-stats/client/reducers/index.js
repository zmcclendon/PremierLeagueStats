import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { playersReducer } from "./playersReducer";

const rootReducer = combineReducers({
	routing: routerReducer,
	players: playersReducer
});

export default rootReducer;