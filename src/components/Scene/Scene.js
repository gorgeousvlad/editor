import React, { Component } from 'react';
import './Scene.scss';
import Draggable from 'react-draggable';
import Grid from'../Grid/Grid';
import ElementFabric from'../../fabric/ElementFabric';
import {PREFIX, scene, grid} from '../../config/config';


const elements = [
  {
    element:"button",
    type:"basic",
    text:"Button"
  }
],
DEFAULT = {x: 60, y: 60};
let fabric = new ElementFabric();

export default class Scene extends Component {
  constructor(props){
    super(props);
    this.state = { 
      deltaPosition: {
        x: 0, y: 0
      }
    }
  }
  render() {
    return (
      <div className = "workplace__scene">
      {this.props.grid? <Grid/> : null}
        {elements.map( (el,index) => {
          return <Draggable
            key = {`scene-draggable-${index}`}
            handle=".handle"
            // defaultPosition={DEFAULT}
            position={null}
            bounds = "parent"
            grid={this.props.grid?[grid.cell, grid.cell]:null}
            onStart={this.handleStart}
            onDrag={(e,ui)=>{
              const {x, y} = this.state.deltaPosition;
              this.setState({
                deltaPosition: {
                  x: x + ui.deltaX,
                  y: y + ui.deltaY,
                }
              });
            }}
            onStop={this.handleStop}>
            <div className = "handle" ref = {(ref)=>{this.ref = ref;}}>
              {fabric.create(Object.assign({}, el, {key:`${el.element}-${index}`}))}
              <div className = "position-label">{`x : ${this.state.deltaPosition.x}, y : ${this.state.deltaPosition.y}`}</div>
            </div>
          </Draggable>
        })}
      </div>
    );
  }
}
