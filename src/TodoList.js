import React, { Component } from 'react';
import todosJson from './mocks/todos.json'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const listTodos = this.props.listTodo.map((todo) => {
            return <TodoItem key={todo.title} title={todo.title} onChange={todo.isDone}/>
        });
        if(listTodos.length == 0){
            return(
                <div><h2>Todo is empty !</h2></div>
            );
        } else {
            return(
                <div>{listTodos}</div>
            );
        }
        
    }
}

export default TodoList;