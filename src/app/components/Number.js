import React, { Component } from 'react';

class Number extends Component {
  render(){
    return (
        <h1 style={{color: this.props.color }}> { this.props.data } </h1>
    );
  }
}

export default Number;
