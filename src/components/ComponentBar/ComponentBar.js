import React, { Component } from 'react';
import './ComponentBar.scss';
const R = require("ramda");

export default class ComponentBar extends Component {
  constructor(props){
    super(props);
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
            {Object.keys(this.props.components)
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
            {this.props.components[this.state.tab]
            .map((component,index) => {
                return (
                    <div
                        key = {`component-bar-component-${index}`} 
                        className = {`component-bar__component component-bar__component--${component.name}`}
                        style = {{backgroundImage:component.thumb}}
                        onClick = {this.props.chooseComponent.bind(this,component.name,this.state.tab)}
                    />
                )

            })
            }
            </div>
        </div>
    );
  }
}
