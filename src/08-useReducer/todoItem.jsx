
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

    const handleDeleteTodo = () => {
        onDeleteTodo(todo.id)
    }

    const handleToggleTodo = () => {
        onToggleTodo(todo.id)
    }

    return (
        <>
            <li className="list-group-item mb-2 d-flex justify-content-between align-items-center">
                <span
                className="clasePrueba"
                    style={todo.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
                    onClick={handleToggleTodo}
                    aria-label="span"
                >
                    {todo.description} 
                </span>

                <button
                    onClick={handleDeleteTodo}
                    className="btn btn-danger"
                    aria-label="button"
                >
                    Borrar
                </button>
            </li>
        </>
    )
}
