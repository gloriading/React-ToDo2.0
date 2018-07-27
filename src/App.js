import React, { Component } from 'react';
import './App.css';
import ToDoManager from './components/ToDoManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoManager />
        <footer>
          <p className="logo">&copy; <span className="pinkText">Glorious</span> Web Design</p>
        </footer>
      </div>
    );
  }
}

export default App;
