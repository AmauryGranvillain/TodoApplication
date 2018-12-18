import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoContainer} from './TodoContainer';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import {todoReducer} from './todoReducer'

const reducer = combineReducers({
  todos: todoReducer,
});

const logger = createLogger({
  level:'log',
});

const store = createStore(reducer, applyMiddleware(logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Liste de todos</h1>
          <TodoContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
