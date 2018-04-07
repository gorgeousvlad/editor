import {createStore, applyMiddleware} from 'redux';  
import rootReducer from '../reducers/reducers';  
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export function configureStore() {  
  return createStore(
    rootReducer,
    applyMiddleware(logger,thunk)
  );
}