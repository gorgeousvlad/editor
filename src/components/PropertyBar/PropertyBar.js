import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import './PropertyBar.scss';
const _  = require("lodash");

export default class PropertyBar extends Component {
  constructor(props){
    super(props);
    this.state = {editing: "", value: ""}
  }
  onClick(el,val){
    this.setState({editing: el, value: val});
  }
  onChange(ev){
    const value = ev.target.value;
    this.props.onEdit(this.props.selected,
    {..._.omit(this.props.properties,this.state.editing),[this.state.editing]:value}) 
  }
  render() {
    return (
      <div className = "workplace__property-bar">
        <Table bordered={true} hover={true}>
      <thead>
        <tr><td>Свойство</td><td>Значение</td></tr>
      </thead>
      <tbody> 
            {this.props.properties && Object.keys(this.props.properties).length?
        Object.entries({element:`${this.props.properties.name}-${this.props.selected}`,...this.props.properties}).map(([name,val],index) => {
          return (
            <tr key = {`row-name-${index}`}>
              <td key = {`col-name-${index}`}>{name}</td>
              <td key = {`col-val-${index}`} onClick = {this.onClick.bind(this,name,val)}>
                {this.state.editing === name ? 
                  <input 
                  onChange = {this.onChange.bind(this)}
                  type = "text" 
                  value = {val}/> 
                  : val}
              </td>
            </tr>
          )
        })
        :null
      }
      </tbody>
      </Table>
      </div>
    );
  }
}
