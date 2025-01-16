import { Link } from "react-router"

const Header = () => {
    return <div className="d-flex justify-content-between align-items-center h-16 sticky top-0">
        <h1>Header</h1>
        <ul className="d-flex gap-5 align-items-center">
            <li>Home</li>
            <Link to="/shop"><li>Shop</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
        </ul>
    </div>
}

export default Header