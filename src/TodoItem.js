import React, { Component } from 'react';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: props.title.toUpperCase(), isDone : props.isDone, class: ''};

        this.setisDone = this.setisDone.bind(this);
    }

    setisDone(){
        this.setState({isDone: !this.state.isDone});
        console.log(this.state.isDone)
        if(!this.state.isDone){
            this.setState({class: 'line-trough'});
        } else {
            this.setState({class: ''});
        }   
    }

    render(){
        return(
            <div>
                <input type="checkbox" checked={this.state.isDone} onChange={this.setisDone}/>
                <p className={this.state.class}>{this.state.title}</p>
            </div>
        );
    }
}

export default TodoItem;