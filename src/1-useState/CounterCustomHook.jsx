import { useCounter } from "../hooks/useCounter"


export const CounterCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter()

    return (
        <>
            <h2>Counter with Hook: {counter}</h2>

            <button className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrement()}>-1</button>
        </>
    )
}
