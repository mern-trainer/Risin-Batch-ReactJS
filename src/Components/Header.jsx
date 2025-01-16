import { Link } from "react-router"

const Header = () => {
    return <div className="d-flex px-4 justify-content-between align-items-center sticky top-0" style={{height: "60px"}}>
        <h4>Header</h4>
        <ul className="d-flex gap-5 align-items-center" style={{listStyle: "none"}}>
            <li>Home</li>
            <Link to="/shop"><li>Shop</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
        </ul>
    </div>
}

export default Header