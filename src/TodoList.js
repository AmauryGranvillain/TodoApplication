import React, { Component } from 'react';
import todosJson from './mocks/todos.json';
import TodoItem from './TodoItem';
import {TodoContext} from './TodoContext'

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TodoContext.Consumer>
            {
                ({todoList}) => {
                    return(
                        <div>
                            {todoList.map((todo) => <TodoItem key={todo.title} title={todo.title} onChange={todo.isDone}></TodoItem>)}
                        </div>
                    )
                }
            }
            </TodoContext.Consumer>
        );        
    }
}

export default TodoList;