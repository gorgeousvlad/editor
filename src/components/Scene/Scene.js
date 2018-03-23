import React, { Component } from 'react';
import './Scene.scss';
//import Button from'../../elements/Button/Button';
import ElementFabric from'../../fabric/ElementFabric';

let fabric = new ElementFabric();
const elements = [
  {
    element:"button",
    type:"basic",
    text:"Готово"
  }
]

export default class Scene extends Component {
  render() {
    return (
      <div className = "scene">
      {elements.map( (el,index) => {
        return fabric.create(Object.assign({}, el, {key:`${el.element}-${index}`}))
      })}
      </div>
    );
  }
}
