import React, { Component } from 'react';
import './Scene.scss';
import ElementFabric from'../../fabric/ElementFabric';
import Draggable from 'react-draggable';

const elements = [
  {
    element:"button",
    type:"basic",
    text:"Готово"
  }
];
let fabric = new ElementFabric(),
eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

export default class Scene extends Component {
  render() {
    return (
      <div className = "scene">
        {elements.map( (el,index) => {
          return <Draggable
            key = {`scene-draggable-${index}`}
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            //grid={[25, 25]}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className = "handle">
              {fabric.create(Object.assign({}, el, {key:`${el.element}-${index}`}))}
            </div>
          </Draggable>
        })}
      </div>
    );
  }
}
