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
    super();
    this.state = DEFAULT
  }
  render() {
    return (
      <div className = {`${PREFIX}__scene`}>
      {this.props.grid? <Grid/> : null}
        {elements.map( (el,index) => {
          return <Draggable
            key = {`scene-draggable-${index}`}
            handle=".handle"
            defaultPosition={DEFAULT}
            position={null}
            bounds = {{
              left:0,
              top:0,
              bottom:scene.height,
              scene:scene.width,
              right:1024
            }}
            grid={[grid.cell, grid.cell]}
            onStart={(e)=>{
            }}
            onDrag={(e)=>{
              //пока что координаты мыши, сделать объекта
              this.setState({x: e.x,y:e.y})
            }}
            onStop={this.handleStop}>
            <div className = "handle" ref = {(ref)=>{this.ref = ref;}}>
              {fabric.create(Object.assign({}, el, {key:`${el.element}-${index}`}))}
              <div className = "position-label">{`x : ${this.state.x}, y : ${this.state.y}`}</div>
            </div>
          </Draggable>
        })}
      </div>
    );
  }
}
