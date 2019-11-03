/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import valley from './photos/valley.jpg';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div>
        <div id="sub-container">
          <img className="background-image" src={valley} />
        </div>
        <div id="top-container">
        </div>
      </div>
    )
  }
}

export default App;
