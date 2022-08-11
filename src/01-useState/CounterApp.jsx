import { useState } from "react"

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 50,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2, counter3}=state;

    return (
        <>
            <h1>Counter : {counter1} </h1>
            <h1>Counter : {counter2} </h1>
            <h1>Counter : {counter3} </h1>

            <hr />

            <button
                className="btn"
                onClick={
                    () => setState({
                        ...state,
                        counter1: counter1 +1
                    })
                } >+1</button>
        </>
    )
}
