import React, { Component } from 'react';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null
    };
  }
  render() {
    return (
      <Home user={this.state.user}/>
    );
  }
}

export default App;
