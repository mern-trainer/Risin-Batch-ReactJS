import { FaStar } from "react-icons/fa"
import { useNavigate } from "react-router"

const ProductList = ({ product, children, cart }) => {

    const navigate = useNavigate()

    return <div className="bg-light p-2 rounded"
        style={{ width: "15rem" }}
    >
        <div className="overflow-hidden">
            <img
                onClick={() => navigate(`/product/${product.id}`)}
            src={product.thumbnail}
            alt={product.title}
            className="w-100 hover-scale"
            style={{ aspectRatio: 1 / 1 }}
        />
        </div>
        <div>
        <h5 className="text-truncate">{product.title}</h5>
        <p className="text-truncate">{product.description}</p>
        <div className="d-flex justify-content-between">
            <div className={`d-flex align-items-center gap-1 ${product.rating < 2 ? "text-danger" : product.rating >= 2 && product.rating < 4 ? "text-warning" : "text-success"}`}>
                <FaStar /> {product.rating}
            </div>
                {cart ? <div>${(product.price * product.quantity).toFixed(2)}</div> : <div>${product.price}</div>}
        </div>
            { children}
        </div>
    </div>
}

export default ProductList