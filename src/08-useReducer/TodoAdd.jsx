
import { useForm } from "../Hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
    const { formState, onInputChange, onResetForm } = useForm({ description: '' });

    const onSubmit = (e) => {
        e.preventDefault();
        if (formState.description.length <= 1) {
            return;
        }
        onNewTodo(
            {
                id: new Date().getTime(),
                description: formState.description,
                done: false,
            }
        );
        onResetForm();
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="¿que hay que hacer?"
                className="form-control"
                name="description"
                onChange={onInputChange}
                value={formState.description}
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
                onClick={onSubmit}
            >
                Agregar
            </button>
        </form>
    )
}
