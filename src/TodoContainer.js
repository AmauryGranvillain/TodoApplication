import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {TodoContext, todoList} from './TodoContext';

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            todoList: todoList,
            addTodo : this.addTodo,
            resetTodo : this.resetTodo
        }

        this.addTodo = this.addTodo.bind(this);
        this.resetTodo = this.resetTodo.bind(this);
    }

    addTodo(title, event){
        this.setState((prevState) => ({
            todoList: [...prevState.todos, {title: title, isDone: false}]
        }));
        event.preventDefault();
    }

    resetTodo(event){
         this.setState({todoList : []});
         event.preventDefault();
    }

    render() {
        return (
            <div className="container-todo">
                <TodoContext.Provider value={this.state}>
                    <TodoList></TodoList>
                    <TodoForm></TodoForm>
                </TodoContext.Provider>
            </div>
        );
      }
}

export default TodoContainer;