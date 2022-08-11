const { renderHook } = require("@testing-library/react")
const { act } = require("react-dom/test-utils")
const { useCounter } = require("../../src/Hooks/useCounter")

describe('pruebas en el useCounter', () => {

    test('Debe de retornar los valores por defecto', () => {
       const { result } = renderHook( () => useCounter() )
       const { counter, increment, decrement, reset } = result.current;
       expect ( counter ).toBe(1); 
       expect ( increment ).toEqual(expect.any(Function)); 
       expect ( decrement ).toEqual(expect.any(Function)); 
       expect ( reset ).toEqual(expect.any(Function));        
    })

    test('debe de generar el counter el valor de 100', () => {
        const { result: { current: { counter } } } = renderHook(() => useCounter(100));
        expect(counter).toBe(100);
    })
    
    test('debe de incrementar el contador', () => {
        // const { result: { current:  { counter, increment,decrement, reset }} } = renderHook( () => useCounter(50));
        const { result } = renderHook( () => useCounter(50));
        const { counter, increment } = result.current;
        //el act sirve para ejecutar una funcion que esta dentro de un hook
        act( () => {
            increment();
            increment(5);
        });
        //se le tiene que mandar directamuente desde ek objeto el valor que espera por que solo te da test paso cuando obtiene el valor desde un objetp
        expect( result.current.counter ).toBe(56); 
    })
    
    test('debe de decrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(50) );
        const { counter, decrement } = result.current;
        act( () => {
            decrement();
            decrement(5);
        })
        expect(result.current.counter ).toBe(44);
     })

     test('debe de realizar el reset del contador', () => {        
        const { result } = renderHook( () => useCounter() );
        const { counter,decrement, reset } = result.current;
        act( () => {
            decrement();
            reset();
        })
        expect( result.current.counter ).toBe(1);
     })
     
})

