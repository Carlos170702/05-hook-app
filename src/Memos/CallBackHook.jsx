import { useCallback, useState } from "react"
import { ShowIncremet } from "./ShowIncremet"


export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);

    //sirve para Guardar una funcion pero para umentar algo ae tiene que usar el callBack de el setState( (value) => {value + valor a sumar} )
    const increment = useCallback(
        //en un useCallback el argumento se manda dentro de el useCallback que usara la funcion
      (value ) => {
        setCounter( (c) => c + value );
    },[],
    )
    
    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>Counter:  { counter } </h1>
            <hr />

            <ShowIncremet increment={ increment } />

        </>
    )
}
