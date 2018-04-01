import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/grid.scss';
import ComponentBar from './components/ComponentBar/ComponentBar';
import Scene from './components/Scene/Scene';


const componentsTest = {
  common:[
    {
      name:"div",
      thumb:"",
      label:"div"
    },
    {
      name:"span",
      thumb:"",
      label:"span"
    },
    {
      name:"button",
      thumb:"button.svg",
      label:"кнопка"
    },
    {
      name:"input",
      thumb:"",
      label:"инпут"
    }
  ],
  project1:[
    {
      name:'switcher',
      thumb:"",
      label:"слово"
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
