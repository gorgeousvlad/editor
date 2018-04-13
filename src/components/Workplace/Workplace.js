import React from 'react';
import { connect } from 'react-redux';
import {addElement,selectElement,deleteElement,editElement} from "../../actions/actions"
import ComponentBar from '../ComponentBar/ComponentBar';
import PropertyBar from '../PropertyBar/PropertyBar';
import Scene from '../Scene/Scene';
const _ = require("lodash");


let workplace = (props) => {
    return (
      <div className="workplace">
       <ComponentBar 
        elements = {props.elements}
        onChoice = {props.addElement}
      />
      <Scene 
        elements = {props.scene}
        selected = {props.selected}
        grid = {true}
        onSelect = {props.selectElement}
        onDelete = {props.deleteElement}
      />
      <PropertyBar
        selected = {props.selected}
        properties = {props.selected?_.values( _.pick(props.scene,props.selected))[0]:{}}
        onEdit = {props.editElement}
      />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    scene:state.scene,
    elements:state.elements,
    selected:state.selected
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addElement: (element) => {
      dispatch(addElement(element))
    },
    selectElement: (id)=>{
      dispatch(selectElement(id))
    },
    deleteElement: (id)=>{
      dispatch(deleteElement(id))
    },
    editElement: (id, props)=>{
      dispatch(editElement(id,props))
    }
  }
}

const Workplace = connect(
  mapStateToProps,
  mapDispatchToProps
)(workplace)

export default Workplace;