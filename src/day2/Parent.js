import React, { Component } from 'react'
import Child from './Prop';

export class Parent extends Component {
  render() {
    return (
      <div>
      <Child/>
      </div>
    )
  }
}

export default Parent
