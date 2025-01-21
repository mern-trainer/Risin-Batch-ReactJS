import { useParams } from "react-router"

const Params = () => {

    const { random_number } = useParams()

    return <div>
        Dynamic Data: {random_number ? random_number : "Not Found"}
    </div>
}

export default Params