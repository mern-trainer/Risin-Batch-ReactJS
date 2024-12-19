import { FaShoppingCart, FaStar } from "react-icons/fa"
import { products } from "../Constants/products"

const ShopPages = () => {

    return <div className="d-flex flex-wrap gap-2 justify-content-center py-3 bg-secondary">
        {
            products.map(product => {
                return <div key={product.id} className="bg-light p-2 rounded" style={{ width: "15rem" }}>
                    <div className="overflow-hidden">
                        <img src={product.image} alt={product.title} className="w-100 hover-scale" style={{aspectRatio: 1/1}}/>
                    </div>
                    <div>
                        <h5 className="text-truncate">{product.title}</h5>
                        <p className="text-truncate">{product.description}</p>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center gap-1"><FaStar /> {product.rating.rate}</div>
                            <div>${product.price}</div>
                        </div>
                        <button className="btn btn-success w-100 mt-2"><FaShoppingCart /> Add To Cart</button>
                    </div>
                </div>
            })
        }
    </div>
}

export default ShopPages
