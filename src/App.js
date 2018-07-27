import React, { Component } from 'react';
import './App.css';
import ToDoManager from './components/ToDoManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoManager />
      </div>
    );
  }
}

export default App;
