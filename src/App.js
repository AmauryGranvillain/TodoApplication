import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Liste de todos</h1>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
