import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {

  //este es el valor que se le manda a el useReducer como 3 parametro lo que ase es que los datos agregados persisten aun que rinicie el navegador 
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState = [] , init);

  const index = todos.filter(datos => datos.done  === true )

  //cada que actualize el useReducer los todos se agrega al localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //datos que se le manda al useReducer que agregara el nuevo "todo"
  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };
    dispatch(action);
  };

  //se le mandara el id a useReducer para que lo elimine
  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] delete todo",
      payload: id,
    };
    dispatch(action);
  };

  //se le mandara el id a useReducer para que lo actualize
  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] update todo",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    index,
  };
};
