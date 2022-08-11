import { fireEvent, render, screen } from "@testing-library/react"
import { UseContext } from "../../src/09-useContext/context/UseContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'carlos',
    }

    //primera prueba
    test('debe de mostrar el componenete sin el usuario', () => {
        render(
            <UseContext.Provider value={{ user: null }}>
                <HomePage />
            </UseContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag).toBeTruthy();
        expect(preTag.innerHTML).toBe('null');
    })

    //segunda prueba
    test('debe de mostrar el componente con el usuario', () => {
        render(
            <UseContext.Provider value={{ user: user }} >
                <HomePage />
            </UseContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
    })

    test('debe de llamar el setUser cuando se le aga click en el boton', () => {

        const addUserMock = jest.fn();

        render(
            <UseContext.Provider value={{ user: null, addUser: addUserMock }}>
                <HomePage />
            </UseContext.Provider>
        )

        const btnNewUser = screen.getByLabelText('button');
        fireEvent.click(btnNewUser)

        expect(addUserMock).toHaveBeenCalledWith(
            {
                "email": "carlosdev1@gmail.com",
                "id": 123,
                "name": "carlos"
            }
        )

    })

})