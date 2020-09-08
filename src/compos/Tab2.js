import React, { Component } from 'react';

class tab2 extends Component {
  render() {
    console.log('this.deactive',this.props.active)
    if(this.props.active){
    return (
      <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a minima sit quidem placeat cumque suscipit ex reiciendis cupiditate vitae eum labore delectus, error consequatur sequi doloribus exercitationem soluta quas nulla unde necessit
      </div>
    );
    }
    return (<div>none2</div>)
  }
}

export default tab2;