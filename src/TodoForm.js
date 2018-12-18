import React, { Component } from 'react';
import {TodoContext} from './TodoContext'

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {title:''}
        this.addTodo = props.addTodo;

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event){
        this.setState({title: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
    }
    resetSubmit(event){
        event.preventDefault();
    }
    
    render(){
        return(
            <TodoContext.Consumer>
             {
                 ({addTodo, resetTodo}) => {
                     return(
                        <div>
                            <label>
                                Title : <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
                            </label>
                            <button onClick={(e) => {addTodo(this.state.title)}}>Add todo</button>
                            <button onClick={(e) => {resetTodo(e)}}>Reset todos</button>
                        </div>
                     )
                 }
                
             }
            </TodoContext.Consumer> 
        );
    }
}

export default TodoForm;