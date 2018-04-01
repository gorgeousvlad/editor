import {createStore, applyMiddleware} from 'redux';  
import rootReducer from '../reducers/reducers';  
import thunk from 'redux-thunk';

export function configureStore() {  
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}