import { FaStar, FaTrash } from "react-icons/fa";
import { useCart } from "../Providers/CartProvider";
import toast from "react-hot-toast";
import Header from "./Header";
import ProductList from "./ProductList";

const Cart = () => {

    const { cartList, setCartList } = useCart()

    const handleRemove = (id) => {
        const res = cartList.filter(product => product.id != id)
        setCartList(res)
  }
  
  const grandTotal = () => {
    const res = cartList.reduce((prev, product) => prev + (product.price * product.quantity), 0)
    return res.toFixed(2)
  }

    const handleQtyUpdate = (operator, product) => {

        if (operator == "-" && product.quantity == 1) {
            handleRemove(product.id)
            return toast.success("Product removed from cart")
        }

        const updatedCart = cartList.map(item => {
            if (item.id == product.id) {
                return {...item, quantity: operator == "+" ? item.quantity + 1 : item.quantity - 1}
            }
            return item
        })
        setCartList(updatedCart)
    }

  return <div className="bg-secondary">
      <Header />
        <h1 className="text-center">Cart</h1>
        <div className="d-flex gap-2 justify-content-center flex-wrap">
           {cartList.map((product) => {
             return <ProductList product={product} key={product.id} cart={true}>
                <div className="my-2 d-flex justify-content-between align-items-center">
                          <button className="btn btn-success w-100" onClick={() => handleQtyUpdate("-", product)}>-</button>
                          <div className=" w-100 text-center">{product.quantity}</div>
                          <button className="btn btn-success w-100" onClick={() => handleQtyUpdate("+", product)}>+</button>
                      </div>
                <button className="btn btn-danger w-100 mt-2" onClick={() => handleRemove(product.id)}>
                  <FaTrash /> Remove
                </button>
             </ProductList>

                  
           })}
      
      
        </div>
        <h4 className="text-center mt-5">
        Grand Total: ${grandTotal()}
      </h4>
    </div>
}

export default Cart