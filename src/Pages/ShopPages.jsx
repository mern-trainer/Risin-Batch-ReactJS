import { FaShoppingCart, FaStar } from "react-icons/fa"
import { products } from "../Constants/products"

const ShopPages = () => {

    return <div className="d-flex flex-wrap gap-3 justify-content-center">
        {
            products.map(product => {
                return <div key={product.id} style={{ width: "14rem" }}>
                    <div>
                        <img src={product.image} alt={product.title} style={{width: "14rem", aspectRatio: 1/1}}/>
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
