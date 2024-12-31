// props [properties] => passing data from parent to child

import { useState } from "react"
import B from "./B"

const A = () => { // parent component

    const [counter, setCounter] = useState(0)
    const age = 20

    return <div>
        Component A <button onClick={() => setCounter(counter + 1)}>Click</button>
        <B age={age} counter={counter}/> {/* child component */}
    </div>
}

export default A