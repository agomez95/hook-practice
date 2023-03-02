import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'
import { useTodos } from '../hooks/useTodos'


export const TodoApp = () => {

    const {todos, todosCount, todosPendingCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos()   /// 16

    return (
        <>            
            <h1>TodoApp: {todosCount}, <small>pendientes: {todosPendingCount}</small></h1>
            <br/>
            <div className="row">
                <div className="col-7"> 
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/> {/*5 /*14 */}
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd onNewTodo={handleNewTodo}/> {/*6*/}
                </div>
            </div>
        </>
    )   //// 2
}



//// 7 -> todoReducer [TODO] Add
/// los otros pasos estan en: useTodos(hook)