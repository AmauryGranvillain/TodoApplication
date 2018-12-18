import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {TodoContext, todoList} from './TodoContext';

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            todoList: todoList,
            addTodo : TodoContext.addTodo,
            resetTodo : TodoContext.resetTodo
        }
    }
    componentDidMount(){
        this.setState({
            addTodo: (title) => {
                this.setState({
                    todoList: [...this.state.todoList, {title: title, isDone: false}]
                });
            },
            resetTodo: () => {
                this.setState({todoList : []});
            }
        })
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