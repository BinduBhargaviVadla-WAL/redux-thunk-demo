import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './reducers/index';
import { createLogger } from 'redux-logger';
import {
  ConnectedRouter as Router,
  routerReducer,
  routerMiddleware,
  routerActions,
} from 'react-router-redux';
import { createHashHistory } from 'history';
import thunk from 'redux-thunk';

const history = createHashHistory();
const middlewareRouter = routerMiddleware(history);
const logger = createLogger({
  level: 'info',
  collapsed: true,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger, middlewareRouter))
);
export default store;
