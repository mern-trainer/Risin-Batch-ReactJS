import { Link, useNavigate } from "react-router"

const Page1 = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        const randomNumber = Math.floor(Math.random() * 10)
        navigate(`/params/${randomNumber}`)
    }

    return <div>
        PAGE 1 COMPONENT
        <button onClick={handleNavigate}>to page 2</button>
    </div>
}

export default Page1