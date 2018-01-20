import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

// import the root reducer
import rootReducer from './reducers/index';

const logger = createLogger();

// create an object for the default data

const middlewares = [thunk, logger];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
	module.hot.accept('./reducers/',() => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;