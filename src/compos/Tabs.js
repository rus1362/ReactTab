import React, { Component } from 'react';
import Tab1 from './Tab1'
import Tab2 from './Tab2'

class Tabs extends Component {
  state ={
    active : 'tab1'
    
  };
  handleNavClick =(e)=>{
    const target= e.target.name;   
    this.setState({active : target});
  }
  render() {
    return (
      <> 
      <ul>
        <input type="button" name='tab1' onClick={this.handleNavClick} value="tab1"/>
        <input type="button"  name='tab2' onClick={this.handleNavClick} value="tab2"/>
      </ul>
        <div>
        
          <Tab1  active={this.state.active==='tab1'}/>
        </div> 
        <div>
          <Tab2  active={this.state.active==='tab2'}/>
        </div>
      </>
    );
  }
}

export default Tabs;