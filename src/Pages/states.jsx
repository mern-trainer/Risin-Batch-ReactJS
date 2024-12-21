
// state => a built-in object in React => stores property values that belong to the component
// Hooks => functions that let you use state and other React features in functional components
// useState => a Hook that allows you to have state variables in functional components => manages the state of the component
// useState => returns an array with two elements
// first element => the current state
// second element => a function that lets you update the current state
// useState => re-render the component when the state changes

// Virtual DOM => A lightweight copy of the Real DOM => a JavaScript representation of the Real DOM
// React Dom 


import { useState } from "react"

const States = () => {

    const [counter, setCounter] = useState({ counter1: 0, counter2: 0 })

    const handleStateUpdate = (type) => {
        if(type == "increment1"){
            setCounter({ ...counter, counter1: counter.counter1 + 1 });
        }
        if(type == "decrement1"){
            setCounter({ ...counter, counter1: counter.counter1 - 1 });
        }
        if(type == "increment2"){
            setCounter({ ...counter, counter2: counter.counter2 + 1 });
        }
        if(type == "decrement2"){
            setCounter({ ...counter, counter2: counter.counter2 - 1 });
        }
    }

    return <div className="d-flex gap-5 mt-5 justify-content-center">
        <div className="d-flex flex-column gap-3 align-items-center">
            <div>Counter 1: {counter.counter1}</div>
            <div className="d-flex gap-3">
                <button className="btn btn-success" onClick={() => handleStateUpdate("increment1")}>Increment</button>
                <button className="btn btn-danger" onClick={() => handleStateUpdate("decrement1")}>Decrement</button>
            </div>
        </div>
        <div className="d-flex flex-column gap-3 align-items-center">
            <div>Counter 2: {counter.counter2}</div>
            <div className="d-flex gap-3">
                <button className="btn btn-success" onClick={() => handleStateUpdate("increment2")}>Increment</button>
                <button className="btn btn-danger" onClick={() => handleStateUpdate("decrement2")}>Decrement</button>
            </div>
        </div>
    </div>
}

export default States
