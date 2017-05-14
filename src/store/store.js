import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';

import rootReducer from '../reducers/index';

//import data
import users from '../sample-data/users';
import topics from '../sample-data/topics';
import cvs from '../sample-data/cvs';

//create default state
const defaultState = {
  users,
  topics,
  cvs
};

const store = createStore(rootReducer, defaultState, applyMiddleware(logger()));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
