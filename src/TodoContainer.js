import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export class TodoContainer extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {listTodo: []}

    //     this.addTodo = this.addTodo.bind(this);
    //     this.resetTodo = this.resetTodo.bind(this);
    // }

    // addTodo(title){
    //     this.setState({listTodo: [...this.state.listTodo, {title: title, isDone: false}]})
    // }

    // resetTodo(){
    //     this.setState({listTodo : []})
    // }

    render() {
        return (
            <div className="container-todo">
                <TodoList />
                <TodoForm />
            </div>
        );
      }
}