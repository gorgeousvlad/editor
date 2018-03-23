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
    text:"Готово"
  }
];
let fabric = new ElementFabric();

export default class Scene extends Component {
  constructor(props){
    super();
    this.state = {x:0,y:0}
  }
  render() {
    return (
      <div className = {`${PREFIX}__scene`}>
      {this.props.grid? <Grid/> : null}
        {elements.map( (el,index) => {
          return <Draggable
            key = {`scene-draggable-${index}`}
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            bounds = {{
              left:0,
              top:0,
              bottom:scene.height,
              scene:scene.width,
              right:1024
            }}
            grid={[grid.cell, grid.cell]}
            onStart={this.handleStart}
            onDrag={(e)=>{
              this.setState({x:e.x,y:e.y})
              //this.handleDrag(e).;
            }}
            onStop={this.handleStop}>
            <div className = "handle">
              {fabric.create(Object.assign({}, el, {key:`${el.element}-${index}`}))}
              <div className = "position-label">{`x : ${this.state.x}, y : ${this.state.y}`}</div>
            </div>
          </Draggable>
        })}
      </div>
    );
  }
}
