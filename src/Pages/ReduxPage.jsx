import { useDispatch, useSelector } from "react-redux"
import { changeName } from "../Redux/name.slice"
import { decrement, increment } from "../Redux/counter.slice"

const ReduxPage = () => {
    
    const { name } = useSelector((state) => state.name)
    const { value } = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    const handleChange = (data) => {
        dispatch(changeName(data))
    }

    const handleCounter = (operator) => {
        if (operator == "+") {
            dispatch(increment({ number: 10}))
        }
        if (operator == "-") {
            dispatch(decrement({ number: 5}))
        }
    }

    return <div className="d-flex mt-4 flex-column gap-3 align-items-center">
        <div>{name}</div> 
        <div className="d-flex gap-4">
            <button onClick={() => handleChange("Alex")} className="btn btn-primary">Alex</button>
            <button onClick={() => handleChange("John Doe")} className="btn btn-success">John Doe</button>
        </div>
        <div>{value}</div> 
        <div className="d-flex gap-4">
            <button onClick={() => handleCounter("+")} className="btn btn-primary">Increment</button>
            <button onClick={() => handleCounter("-")} className="btn btn-success">Decrement</button>
        </div>
    </div>
}

export default ReduxPage