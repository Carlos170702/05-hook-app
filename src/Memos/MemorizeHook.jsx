import { useMemo, useState } from "react";
import { useCounter } from "../Hooks/useCounter"

    const heavyStuff = ( iterationNumber =  100) =>{
        for (let i = 0; i < iterationNumber; i++) {
            console.log('ahi vamos....')
        }
        return(`${ iterationNumber } done `)
    }

export const MemoHook = () => {
    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true)
    //el useMemo sirve para memorizar una funcion o algo, es como el useEffect que tiene el parametro de cuando se actualize la variable ejecute el useMemo.
    const memorizeValue =  useMemo( () => heavyStuff( counter ), [ counter ] );

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ memorizeValue }</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment( 1 )}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow(!show) }
            >
                Show/Hidden: {JSON.stringify(show)}
            </button>
        </>
    )
}
