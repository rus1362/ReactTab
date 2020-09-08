import React, { Component } from 'react';

class tab1 extends Component {
  render() {
    console.log('this.active',this.props.active)
    if(this.props.active){
    return (
      <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      </div>
    );
    }
    return (<div>sabula</div>)
  }
}

export default tab1;