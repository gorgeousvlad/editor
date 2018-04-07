import {combineReducers} from 'redux';
import {ADD_ELEMENT,SELECT_ELEMENT,DELETE_ELEMENT,EDIT_ELEMENT,LOAD_COMPONENTS_SUCCESS} from '../actions/actions';
import initialState from '../store/initialState';
const _ = require('lodash');

function components(state = initialState.components, action) {
  switch (action.type) {
    case LOAD_COMPONENTS_SUCCESS:
      return action.components;
  default:
    return state
  }
};

function selected (state = initialState.selected, action){ 
  switch (action.type) {
    case SELECT_ELEMENT:
      return action.id;
  default:
    return state
  }
};

function scene(state = initialState.scene, action) {
  switch (action.type) {
    case ADD_ELEMENT:{
      return {
        ...state,
        [Math.max(Object.keys(state)) + 1] : {
          ...action.component
        }
      }
    }
    case DELETE_ELEMENT:{
      return _.pickBy(state,(val,key) => key === action.id)
    }
    case EDIT_ELEMENT:{
      return {
        ..._.pickBy(state,(val,key) => key === action.id),
        [action.id]:{
          props:action.props,
         ..._.omit(state[action.id],"props")
        }
      }
    }
    
  default:
    return state
  }
};

const rootReducer = combineReducers({
  components,
  selected,
  scene
});

export default rootReducer;