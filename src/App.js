import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/grid.scss';
import Workplace from './components/Workplace/Workplace';
import ComponentBar from './components/ComponentBar/ComponentBar';
import Scene from './components/Scene/Scene';

class App extends Component {
  render() {
    return (
    <div>
	    <div className = "main-menu"/>
      <Workplace/>
    </div>
    );
  }
}

export default App;
