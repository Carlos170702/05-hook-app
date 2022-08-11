import { renderHook } from "@testing-library/react"
import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('pruebas en todoReducer', () => { 
    
    const initialState = [ 
        {
            id: 1,
            description: 'Demo todo',
            done: false,
        }
    ]

    //primer test
    test('debe de regresar el estado unicial', () => { 
        const { result: { current} } = renderHook( () => todoReducer( initialState, {} )) 
        
        expect(current).toEqual(initialState);
     })

    //segundo test
    test('debe de agregar un toso ', () => { 
        const action ={
            type: '[TODO] add todo',
            payload: {
                id: 2,
                description: 'nuevo todo #2',
                done: false,
            }
        }
        const { result: { current } } = renderHook( () => todoReducer( initialState, action ) )
        
        expect(current.length).toBe(2);
        expect(current).toContain(action.payload);
    })

    //tercera prueba
    test('debe de eliminar un todo ', () => {
        const action ={
            type: '[TODO] delete todo',
            payload: 1,
        }

        const { result: { current } } = renderHook( () => todoReducer( initialState,action))

        
        expect( current.length ).toBe(0);
    })

    //cuarta prueba
    test('debe de realixar el toggle del todo ' , () => {
        const action = {
            type: '[TODO] update todo',
            payload: 1,
        }

        const { result: { current } } = renderHook( () => todoReducer( initialState, action ) )
        expect(current[0].done).toBe(true);
    })

})