import { useEffect, useReducer } from 'react';
import { todoReducer } from '../6-useReducer/todoReducer' ////4

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}   /// 11

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init /*11*/) //// 3

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])  /// 10

    const handleNewTodo = (todo) => {   /// 5.5
        //console.log({todo}) 
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }   /// 8

        dispatch(action)    /// 8.5
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id /// 13.5
        })
    }   /// 13

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id 
        })
    }   /// 15

    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter(todo => !todo.done).length,
        dispatch,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
