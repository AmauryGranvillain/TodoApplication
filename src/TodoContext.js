import React from 'react';

export const todoList = [{
    title: 'Send a mail',
    isDone: false
},
{
    title: 'Send a message',
    isDone: false
}];

export const TodoContext =  React.createContext({
    todoList,
    addTodo: (title,event) => {},
    resetTodo: (event) => {}
})