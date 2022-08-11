import { useTodo } from "../Hooks/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, index } = useTodo();
    
    return (
        <>
            <h1>TodoApp: {todos.length}, <small>Pendiente:  {index.length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todo={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>


        </>
    )
}
