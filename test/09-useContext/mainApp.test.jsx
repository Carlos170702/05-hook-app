import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { MainApp } from '../../src/09-useContext/mainApp';

describe(' pruebas en <mainApp />', () => {

    test('debe de mostrar el HomePAge', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

            screen.debug()

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
        expect(screen.getAllByText('HomePage')).toBeTruthy();

    })

    test('debe de mostrar el LoginPage', () => {

        render(
            //se le manda en que router o pantalla se quiere estar pero con el nombre que se le dio en ael main
            <MemoryRouter initialEntries={['/Login']} >
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login')).toBeTruthy();
      
    })

})