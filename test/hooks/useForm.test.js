import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../src/Hooks/useForm"

describe('pruebas en useForm', () => {

    //primera prueba
    test('debe de regresar la informacion por defecto', () => { 
        const values = {
            name: 'carlos',
            email: 'carlosdev1@gmail.com'
        }

        const { result: { current } } = renderHook( () => useForm( values ))
        
        expect( current ).toEqual(
            {
                formState: values,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function)
            }
        )
    })

    //segunda prueba
    test('debe de regresar el nuevo valor', () => { 
        const values = {
            name: 'carlos',
            email: 'carlosdev1@gmail.com'
        }

        const newValue =  'Juan';

        const { result } = renderHook( () => useForm( values ))
        const { formState, onInputChange } = result.current;

        act( (() => {
            onInputChange({ target: { name: 'name', value: newValue}});
        })) 

        expect(result.current.formState.name ).toBe(newValue);
    })

    //tercera prueba
    test('debe de realizar el reset del formilario', () => { 
        const values = {
            name: 'carlos',
            email: 'carlosdev1@gmail.com'
        }

        const newValue =  'Juan';   

        const { result } = renderHook( ()=> useForm(values) )
        const { formState, onInputChange, onResetForm } = result.current;   

        act( () => {
            onInputChange( { target: { name: 'name', value: newValue } } )
            onResetForm();
        })     

        expect( result.current.formState ).toEqual(values)
        expect( result.current.formState.name ).toEqual(values.name)
    })
  
})
