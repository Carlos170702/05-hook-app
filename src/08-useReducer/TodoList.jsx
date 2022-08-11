import { TodoItem } from "./todoItem"

export const TodoList = ({ todo = [], onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <ul className="list-group">
                {
                    todo.map(values => (
                        <TodoItem key={values.id} todo={values} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
                    ))
                }
            </ul>
        </>
    )
}
