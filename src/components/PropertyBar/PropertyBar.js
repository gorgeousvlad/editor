import React, { Component } from 'react';
import './PropertyBar.scss';

export default class PropertyBar extends Component {
  constructor(props){
    super(props);
    this.state = {editing:""}
  }
  render() {
    return (
      <div className = "workplace__property-bar">
      <table className = "property-bar__table">
      <thead>
        <tr><td>Свойство</td><td>Значение</td></tr>
      </thead>
      <tbody> 
            {this.props.properties && Object.keys(this.props.properties).length?
        Object.entries({elment:`${this.props.properties.name}-${this.props.selected}`,...this.props.properties}).map(([name,val],index) => {
          return (
            <tr key = {`row-name-${index}`}>
              <td key = {`col-name-${index}`}>{name}</td>
              <td key = {`col-val-${index}`}>{val}</td>
            </tr>
          )
        })
        :null
      }
      </tbody>
      </table>
      </div>
    );
  }
}
