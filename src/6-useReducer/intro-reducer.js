const initialState = [{
    id: 1,
    todo: 'Recoletar la primera Gema',
    done: false
}]  /// 1

const todoReducer = (state = initialState, action = {}) => {
    if(action.type === '[TODO] add todo') return [...state, action.payload] /// 7
    return state
}   /// 2

let todos = todoReducer()   /// 3

const newTodo = {
    id: 2,
    todo: 'Recoletar la segunda Gema',
    done: false
}   /// 5

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}   /// 6

todos = todoReducer(todos, addTodoAction)   /// 8

console.log({state: todos}) /// 4