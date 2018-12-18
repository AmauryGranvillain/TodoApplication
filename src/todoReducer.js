import {ADD_TODO, RESET_TODO} from './store/todoAction'

export const todoList = [{
    title: 'Send a mail',
    isDone: false
},
{
    title: 'Send a message',
    isDone: false
}];

export const initialState = {
    list: todoList,
};

export function todoReducer (state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            const todo = {
                title: action.title,
                isDone: false
            }
            return{
                ...state,
                list:[...state.list, todo]
            }
        case RESET_TODO:
            return{
                list: []
            }
        default: return state;
    }
}