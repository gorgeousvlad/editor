import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addElement,selectElement,deleteElement,editElement} from "../../actions/actions"
import ComponentBar from '../ComponentBar/ComponentBar';
import Scene from '../Scene/Scene';

let workplace = (props) => {
    return (
      <div className="workplace">
       <ComponentBar 
          elements = {props.elements}
          onChoice = {props.addElement}
        />
        <Scene 
          elements = {props.scene}
          grid = {true}
          onChoice = {props.selectElement}
          onDelete = {props.deleteElement}
        />
	      <div className = "workplace__propperties-bar"/>
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
    addElement: (id) => {
      dispatch(addElement(id))
    },
    selectElement: (id)=>{
      dispatch(selectElement(id))
    },
    deleteElement: (id)=>{
      dispatch(deleteElement(id))
    },
    editElement: (id, props)=>{
      dispatch(deleteElement(id,props))
    }
  }
}

const Workplace = connect(
  mapStateToProps,
  mapDispatchToProps
)(workplace)

export default Workplace;