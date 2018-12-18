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
    handleSubmit(event, addTodo){
        event.preventDefault();
        console.log(event);
        addTodo(this.state.title);

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
                        <form onSubmit={(e) => this.handleSubmit(e, addTodo)}>
                            <label>
                                Title : <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
                            </label>
                            <input type="submit" value="Add"/>
                            <input type="submit" value="Reset" onClick={(e) => {resetTodo(e)}}/>
                        </form>
                     )
                 }
                
             }
            </TodoContext.Consumer> 
        );
    }
}

export default TodoForm;