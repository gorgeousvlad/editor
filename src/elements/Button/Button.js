import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  constructor(props){
    super(props);
  }
  _onClick(){

  }
  render(){
    let base = `element__${this.props.component}`
    return <div
      className = {`${base} ${base}__${this.props.type} ${base}--${this.props.curState||"default"}`}
      onClick = {this._onClick.bind(this)}
    >
    {this.props.text}
    </div>
  }
}