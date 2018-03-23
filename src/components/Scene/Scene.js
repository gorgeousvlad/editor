import React, { Component } from 'react';
import './Scene.scss';
import Button from'../../elements/Button/Button';

export default class Scene extends Component {
  render() {
    return (
      <div className = "scene">
      <Button element = "button" type = "basic" text = "Готово"/>
      </div>
    );
  }
}
