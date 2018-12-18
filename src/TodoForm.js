import React, { Component } from 'react';
import {addTodo, resetTodo} from './store/todoAction';
import { connect } from 'react-redux';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {title:''}
        // this.addTodo = props.addTodo;

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event){
        this.setState({title: event.target.value});
    }
    // handleSubmit(event){
    //     this.addTodo(this.state.title);
    //     event.preventDefault();
    // }
    // resetSubmit(event){
    //     this.removeTodo();
    //     event.preventDefault();
    // }
    render(){
        return(
            <div>
                <label>
                    Title : <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
                </label>
                <button onClick={() => this.props.addTodo(this.state.title)}> Add todo</button>
                <button onClick={() => this.props.resetTodo()}> Reset todo</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.list
});
const mapDispatchToProps = dispatch => ({
    addTodo: title => dispatch(addTodo(title)),
    resetTodo: () => dispatch(resetTodo()) 
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoForm);