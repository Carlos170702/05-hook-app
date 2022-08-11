import { useCounter } from "../Hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => increment(2)}
            >+1 </button>

            <button
                className="btn btn-primary"
                onClick={ reset }
            >Reset </button>

            <button 
                className="btn btn-primary"
                onClick={ () => decrement(2) }
            >-1 </button>
        </>

    )
}
