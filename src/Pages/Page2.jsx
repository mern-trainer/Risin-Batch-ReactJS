import { Link, useNavigate } from "react-router"

const Page2 = () => {

    const is_valid = false

    // useNavigate => conditional navigation
    
    const navigate = useNavigate()

    const handleNavigate = () => {
        if (is_valid) {
            return navigate("/page1")
        }
        return navigate("/")
    }

    return <div>
        Page 2
        {/* <Link to={"/page1"}>to page 1</Link> */}
        <button onClick={handleNavigate}>to page 1</button>
    </div>
}

export default Page2