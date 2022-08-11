import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/todoItem";


describe('pruebas en <todoItem />', () => {

    const todo = {
        id: 1,
        description: 'piedra del alma',
        done: false,
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    //primera prueba
    test('debe de mostrar el TODO pendiente de completado', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        const listElement = screen.getByRole('listitem' ) 

        expect(listElement.className) .toBe('list-group-item mb-2 d-flex justify-content-between align-items-center');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('clasePrueba')

        expect(screen.getByText('piedra del alma').innerHTML).toBe(todo.description)
    })


    //segunda prueba
    test('el span debe de llamar el ToggleTodo cuando se hace click', () => {
        render( 
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            /> 
        )

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledTimes( 1 )
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )
    })

    //tercera prueba
    test('el button debe de llamar el DeleteTodo cuando se hace click', () => {
        render(
            <TodoItem 
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        )

        const buttonElement = screen.getByLabelText('button')
        fireEvent.click( buttonElement )

        expect( onDeleteTodoMock ).toHaveBeenCalledTimes(todo.id);
        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id);
    })
    

})