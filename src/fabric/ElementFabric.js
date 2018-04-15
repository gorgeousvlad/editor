import React from 'react';
import Button from'../elements/Button/Button';

export default class ElementFabric{
  constructor(props){
    this.props = props
  }
  create(element){
    switch(element.component){
      case "button":{
         return <Button
         {...element}
         />
      }
      default:
    }
  }
}