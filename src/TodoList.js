import React, { Component } from 'react';
import todosJson from './mocks/todos.json';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return( 
            <div>
                {
                    this.props.todos.map((item) => <TodoItem key= {item.title} title={item.title} />)
                }
            </div>
        ) 
    }
}

const mapStateToProps = state => ({
    todos: state.todos.list
});

export default connect(
    mapStateToProps,
)(TodoList);