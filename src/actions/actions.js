export const ADD_ELEMENT = "ADD_ELEMENT";
export const SELECT_ELEMENT = "SELECT_ELEMENT";
export const DELETE_ELEMENT = "DELETE_ELEMENT";
export const EDIT_ELEMENT = "EDIT_ELEMENT";
export const LOAD_COMPONENTS_SUCCESS  = "LOAD_COMPONENTS_SUCCESS"


export function addElement(component){
  return {
    type:ADD_ELEMENT,
    id:component
  }
};

export function selectElement(id){
  return {
    type:SELECT_ELEMENT,
    id:id
  }
};

export function deleteElement(id){
  return {
    type:DELETE_ELEMENT,
    id:id
  }
};

export function editElement(id,props){
  return {
    type:EDIT_ELEMENT,
    id:id,
    props:props
  }
};

export function loadComponentsSuccess(components){
  return {
    type:LOAD_COMPONENTS_SUCCESS,
    components:components
  }
};