import { legacy_createStore, applyMiddleware } from 'redux';
import { countReducer } from './reducer';
import { logger } from 'redux-logger';
import payload from './payload'

export const store = legacy_createStore(countReducer, applyMiddleware(logger,payload));