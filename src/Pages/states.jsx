
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

    const [counter, setCounter] = useState(0)

    return <div className="d-flex justify-content-center flex-column mt-3 gap-4 align-items-center">
        <div>{counter}</div>
        <div className="d-flex gap-3">
            <button className="btn btn-success" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="btn btn-danger" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    </div>
}

export default States