const { render, screen,fireEvent } = require("@testing-library/react")
const { MultipleCustomHooks } = require("../../src/03-examples");
const { useCounter } = require("../../src/Hooks/useCounter");
const { useFetch } = require("../../src/Hooks/useFetch")

//se ase un mcok de useFetch
jest.mock('../../src/Hooks/useFetch');
jest.mock('../../src/Hooks/useCounter')

describe('pruebas en <MultipleCustomHooks />', () => { 

    //se pone dentro del describe para que todos los test tengan este mock del counter
    const mockIncrement = jest.fn();
        useCounter.mockReturnValue(
            {
                counter: 1,
                increment: mockIncrement,
            }
    )

    //esto es para resetear las funciones que se les icieron los mocks antes de cada prueba
    beforeEach( () =>{
        jest.clearAllMocks;
    } )

    //primera prueba
    test('debe de mostrar el componente por defecto', ( ) => { 
        useFetch.mockReturnValue(
            {
                data: null,
                isLoading: true,
                hasError: null,
            }
        );

        render( <MultipleCustomHooks /> )

        expect(screen.getByText('BreakingBad Quotes')).toBeTruthy();
        expect(screen.getByText('Loading...')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: "Next quote"});
        expect( nextButton.disabled ).toBeTruthy();

    })

    //segunda prueba
    test('debe de mostrar un quote', () => {
        useFetch.mockReturnValue(
            {
                data: [{ author: 'carlos daniel', quote: 'hola mundo' }],
                isLoading: false,
                hasError: null,
            }
        )

        render( <MultipleCustomHooks /> ) 

        const nextButton = screen.getByRole('button', {name: 'Next quote'})

        expect( screen.getByText('hola mundo') ).toBeTruthy();
        expect( screen.getByText('carlos daniel') ).toBeTruthy();
        expect( nextButton.disabled ).toBeFalsy();
    })
   
    //tercera prueba
    test('debe de llamar la funcion de incrementar', () => { 
        useFetch.mockReturnValue(
            {
                data: [{ author: 'carlos daniel', quote: 'hola mundo' }],
                isLoading: false,
                hasError: null,
            }
        )    

        render( <MultipleCustomHooks /> ) 
        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        fireEvent.click( nextButton )
        expect( mockIncrement ).toBeCalledTimes(1)

    })

 })