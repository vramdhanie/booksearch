import React, { Component } from 'react';
import './App.css';
import Library from './components/library/library';

class App extends Component {
  render() {
    return (
      <main role="main" className="App">
        <Library />
      </main>
    );
  }
}

export default App;
