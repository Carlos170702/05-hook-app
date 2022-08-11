//este es el valor con el que empieza el ereducer
const InitialState = [];

//este es el reducer
const todoReducer = (state = InitialState, action = {}) => {
  if (action.type === "[Todo] add todo") {
    return [...state, ...action.payload];
  }
  return state;
};

//este es el nuevo todo a agregar
const newTodo = [
  {
    id: 2,
    todo: "Recolectar la piedra del poder",
    done: false,
  },
  {
    id: 3,
    todo: "Recolectar la piedra dela salud",
    done: false,
  },
];

//accion que ejecutara con el nuevo todo
const addTodoAction = {
  type: "[Todo] add todo",
  payload: newTodo,
};

//se llamael reducer y se le manda los atributos
const callReducer = todoReducer(InitialState, addTodoAction);

console.log(callReducer);
