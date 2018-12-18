export const ADD_TODO = 'ADD_TODO';
export const RESET_TODO = 'RESET_TODO';

export function addTodo(title){
    return{
        type: ADD_TODO,
        title
    }
}

export function resetTodo(){
    return{
        type: RESET_TODO
    }
}