import { useDispatch, useSelector } from "react-redux"
import { changeName } from "../Redux/name.slice"

const ReduxPage = () => {
    
    const { name } = useSelector((state) => state.name)

    const dispatch = useDispatch()

    const handleChange = (data) => {
        dispatch(changeName(data))
    }

    return <div className="d-flex mt-4 flex-column gap-3 align-items-center">
        <div>{name}</div> 
        <div className="d-flex gap-4">
            <button onClick={() => handleChange("Alex")} className="btn btn-primary">Alex</button>
            <button onClick={() => handleChange("John Doe")} className="btn btn-success">John Doe</button>
        </div>
    </div>
}

export default ReduxPage