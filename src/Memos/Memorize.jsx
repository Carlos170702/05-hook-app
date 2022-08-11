import { useState } from "react";
import { useCounter } from "../Hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {
    const { counter, increment } = useCounter(1);

    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter: <Small value={ counter } /> </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment( 1 )}
            >
                +1
            </button>

            <button
                onClick={ () => setShow(!show) }
            >
                Show/Hidden: {JSON.stringify(show)}
            </button>
        </>
    )
}
