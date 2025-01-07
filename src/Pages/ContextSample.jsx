import { useContext } from "react"
import { CounterContext } from "../Providers/counterProvider"

const Context = () => {

    const { counter, setCounter } = useContext(CounterContext)

    return <div>
        {counter}
        <div>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    </div>
}

export default Context