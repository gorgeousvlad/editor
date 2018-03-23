import React from 'react';
import ReactDOM from 'react-dom';
import Button from'../elements/Button/Button';

export default class ElementFabric{
  constructor(props){
    this.props = props
  }
  create(element){
    switch(element.element){
      case "button":{
         return <Button
         {...element}
         ref = "myButton"
         />
      }
    }
  }
}