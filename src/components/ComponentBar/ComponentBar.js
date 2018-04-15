import React, { Component } from 'react';
import './ComponentBar.scss';
import {importFiles} from '../../helpers/helper.js';

export default class ComponentBar extends Component {
  constructor(props){
    super(props);
    //не работает, если в require передавать переменную
    this.thumbs = importFiles(require.context('../../elements/thumbs/', false, /\.(png|jpe?g|svg)$/));
    this.state = { 
      tab: "common"
    }
  }
  switchTab(tab){
    this.setState({tab:tab})
  }
  render() {
    return (
      <div className = "workplace__component-bar">
          <div className = "component-bar__tab-wrapper">
          {Object.keys(this.props.elements)
          .map( (project,index) => 
          {
            return (
              <div
                key = {`tab-${index}`} 
                className = {`component-bar__tab ${project===this.state.tab? "active" : ""}`}
                onClick = {this.switchTab.bind(this,project)}
              >
              {project}
              </div>
            )
          })}
          </div>
          <div className = "component-bar__field">
          {Object.entries(this.props.elements[this.state.tab])
          .map(([id,component]) => {
            return (    
              <div
                key = {`component-bar-component-${id}`} 
                className = {`component-bar__component component-bar__component--${component.component}`}
                onClick = {this.props.onChoice.bind(this,{component:component.component,...component.props})}
              >
              <img src = {this.thumbs[component.thumb]} alt = {component.component}/>
              <div className = 'component-bar__label'>{component.label}</div>
              </div>
            )
          })
          }
          </div>
      </div>
    );
  }
}
