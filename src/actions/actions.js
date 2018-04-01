export const ADD_ELEMENT = "ADD_ELEMENT";
export const LOAD_COMPONENTS_SUCCESS  = "LOAD_COMPONENTS_SUCCESS"

export function addElement(element){
  return {
    type:ADD_ELEMENT,
    element:element
  }
}

export function loadComponentsSuccess(components){
  return {
    type:LOAD_COMPONENTS_SUCCESS,
    components:components
  }
}