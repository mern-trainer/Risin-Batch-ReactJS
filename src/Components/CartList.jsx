import { FaShoppingCart, FaStar, FaTrash } from "react-icons/fa";
import { useCart } from "../Providers/CartProvider";

const Cart = () => {

    const { cartList, setCartList } = useCart()

    const handleRemove = (id) => {
        const res = cartList.filter(product => product.id != id)
        setCartList(res)
    }

    return <div className="mt-5">
        <h1 className="text-center">Cart</h1>
        <div className="d-flex gap-2 justify-content-center flex-wrap">
           {cartList.map((product) => {
                   return (
                     <div
                       key={product.id}
                       className="bg-light p-2 rounded"
                       style={{ width: "15rem" }}
                     >
                       <div className="overflow-hidden">
                         <img
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
                           <div>${product.price}</div>
                               </div>
                               <div className="my-2 d-flex justify-content-between align-items-center">
                                   <button className="btn btn-success w-100">-</button>
                                   <div className=" w-100 text-center">{product.quantity}</div>
                                   <button className="btn btn-success w-100">+</button>
                               </div>
                         <button className="btn btn-danger w-100 mt-2" onClick={() => handleRemove(product.id)}>
                           <FaTrash /> Remove
                         </button>
                       </div>
                     </div>
                   );
                 })}
        </div>
    </div>
}

export default Cart