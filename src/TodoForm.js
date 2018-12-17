import React, { Component } from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {title:''}
        this.addTodo = props.addTodo;

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event){
        this.setState({title: event.target.value});
    }
    handleSubmit(event){
        this.addTodo(this.state.title);
        event.preventDefault();
    }
    resetSubmit(event){
        this.removeTodo();
        event.preventDefault();
    }
    render(){
        return(
            <form>
                <label>
                    Title : <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
                </label>
                <input type="submit" value="Add" onClick={this.handleSubmit}/>
                <input type="submit" value="Reset" onClick={this.resetSubmit}/>
            </form>
        );
    }
}

export default TodoForm;