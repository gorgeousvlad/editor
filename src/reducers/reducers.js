import {combineReducers} from 'redux';
import {ADD_ELEMENT,LOAD_COMPONENTS_SUCCESS} from '../actions/actions';
import initialState from '../store/initialState';

function components(state = initialState.components, action) {
  switch (action.type) {
    case LOAD_COMPONENTS_SUCCESS:
      return action.components;
  default:
    return state
  }
};

function scene(state = initialState.scene, action) {
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
  scene
});

export default rootReducer;