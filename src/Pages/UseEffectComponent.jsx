// useEffect => to handle lifecycle of a component
// => to perform side effects in a component

import { useEffect, useState } from "react"

// 3 stages
// mounting => called after initial render
// updating => called after re-render - state/props change
// unmounting => called before component is removed


const UseEffectComponent = () => {

    // const [counter, setCounter] = useState(0)
    // const [counter2, setCounter2] = useState(0)

    // useEffect(() => {
    //     console.log(counter);
    //     return () => {
    //         console.log("unmounting");
    //     }
    // }, [counter])

    // return <div>
    //     {counter}
    //     {counter2}
    //     <button onClick={() => setCounter(counter + 1)}>Click</button>
    //     <button onClick={() => setCounter2(counter2 + 1)}>Click</button>
    // </div>

    const [counter, setCounter] = useState(0)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTimer((prevTime) => prevTime + 1)
        }, 1000) // --ms
        return () => {
            clearInterval(timeInterval)
        }
    }, [counter])

    return <div className="d-flex flex-column gap-3 align-items-center mt-4">
        <div>Timer: {timer}</div>
        <div>counter: {counter}</div>
        <div>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Update Count</button>
        </div>
    </div>

}

export default UseEffectComponent