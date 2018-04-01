import {combineReducers} from 'redux';
import {ADD_ELEMENT,LOAD_COMPONENTS_SUCCESS} from '../actions/actions';
import {initialState} from '../state/initialState';

//список компонентов с разбивкой по проектам, который приходит с сервера
function components(state = initialState.components, action) {
  switch (action.type) {
    case LOAD_COMPONENTS_SUCCESS:
      return action.components;
  default:
    return state
  }
};

//текущий проект, то есть что в данный момент на сцене
function project(state = initialState.project, action) {
  switch (action.type) {
    case ADD_ELEMENT:{
      return [
        ...state,
        action.element
      ]
    }
  default:
    return state
  }
};

const rootReducer = combineReducers({
  components,
  project
});

export default rootReducer;