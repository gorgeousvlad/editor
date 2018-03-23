import React, { Component } from 'react';
import './Grid.scss';
import {PREFIX, scene, grid} from '../../config/config';
const R = require('ramda');

export default class Grid extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const rows = Math.round(scene.height/grid.cell),
      columns = Math.round(scene.width/grid.cell);
    return (
      <div className = {`${PREFIX}__scene__grid`}>
        <div className = {`${PREFIX}__scene__grid__rows`}>
          {R.range(0,rows).map((index)=>{
              return  <div
                  key = {`gridrow-${index}`}
                  className  = {`${PREFIX}__scene__grid__cell`}
                  style = {{height:grid.cell}}
                />})
          }
        </div>
        <div className = {`${PREFIX}__scene__grid__columns`}>
          {
            R.range(0,columns).map((index)=>{
              return <div
                key = {`gridcolumn-${index}`}
                className  = {`${PREFIX}__scene__grid__cell`}
                style = {{width:grid.cell}}
              />})
          }
        </div>
    </div>
    )
  }
}