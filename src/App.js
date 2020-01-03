import React, { Component } from 'react';
import Home from './Home';
import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Ali'
    };
  }
  render() {
    return (
      <div>
        {this.state.user && <Welcome user={this.state.user} />}
        <Home user={this.state.user} />
      </div>
    );
  }
}

export default App;
