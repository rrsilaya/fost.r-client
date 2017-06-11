import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Router history={ withRouter }>
        <div>
          <Navigation />
          <Main />          
        </div>
      </Router>
    );
  }
}

export default App;
