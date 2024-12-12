import Logo from "./Logo"
import { FiSearch, FiUser } from "react-icons/fi";
import "./NavBar.css"

const NavBar = () => {
    return <div className="nav-container">
        <Logo />
        <ul>
            <li>Our Cars</li>
            <li>Shop</li>
            <li>Owners</li>
            <li>About Us</li>
        </ul>
        <div className="nav-items-right">
            <button><FiUser /> Sign in</button>
            <FiSearch />
        </div>
    </div>
}

export default NavBar
