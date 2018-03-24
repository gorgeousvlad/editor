import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/grid.scss';
import Scene from './components/Scene/Scene';

class App extends Component {
  render() {
    return (
    <div>
	    <div className = "main-menu"/>
	    <div className = "workplace">
	      <div className = "workplace__component-bar"/>
	      <Scene grid = {true}/>
	      <div className = "workplace__propperties-bar"/>
	    </div>
    </div>
    );
  }
}

export default App;
