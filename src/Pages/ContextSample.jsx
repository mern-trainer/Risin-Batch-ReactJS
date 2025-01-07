import { useContext } from "react"
import { MyContext } from "../App"

const Context = () => {

    const { counter, setCounter } = useContext(MyContext)

    return <div>
        {counter}
        <div>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    </div>
}

export default Context