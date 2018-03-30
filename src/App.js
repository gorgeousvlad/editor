import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/grid.scss';
import ComponentBar from './components/ComponentBar/ComponentBar';
import Scene from './components/Scene/Scene';

const componentsTest = {
  common:[
    {
      name:"button",
      thumb:""
    },
    {
      name:"input",
      thumb:""
    }
  ],
  project1:[
    {
      name:'wordSwitcher',
      thumb:""
    }
  ]


}
class App extends Component {
  render() {
    return (
    <div>
	    <div className = "main-menu"/>
	    <div className = "workplace">
        <ComponentBar 
          components = {componentsTest}
          switchTab = {(tab) => console.log("Tab "+tab)}
          chooseComponent = {(name,project) => console.log("Choosen",name,project)}
        />
        <Scene 
          grid = {true}
        />
	      <div className = "workplace__propperties-bar"/>
	    </div>
    </div>
    );
  }
}

export default App;
