import { screen, render } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/todoApp";
import { useTodo } from "../../src/Hooks/useTodo";

jest.mock('../../src/Hooks/useTodo')

describe('pruebas den <TodoApp />', () => {

    useTodo.mockReturnValue(
        {
            todos: [
                { id: 1, description: "Todo #1", done: false },
                { id: 2, description: "Todo #2", done: false },
            ],
            handleNewTodo: jest.fn(), 
            handleDeleteTodo: jest.fn(), 
            handleToggleTodo: jest.fn(), 
            index: 0,
        }
    )

    test('debe de mostrar el componente correcto', () => {

        render(
            <TodoApp />
        )

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
      
    })

})