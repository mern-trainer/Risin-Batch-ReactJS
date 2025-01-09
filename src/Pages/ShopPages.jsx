import { FaShoppingCart, FaStar } from "react-icons/fa";
import { shopProducts } from "../Constants/shop";
import { Fragment } from "react";
import Cart from "../Components/CartList";
import { useCart } from "../Providers/CartProvider";
import toast from "react-hot-toast";

const ShopPages = () => {

  const { cartList, setCartList } = useCart()

  const handleAddToCart = (product) => {
    const index = cartList.findIndex(item => item.id == product.id)
    if (index == -1) {
      toast.success("Product added to cart")
      return setCartList([...cartList, {...product, quantity: 1}])
    }
    const updatedCart = cartList.map(item => {
      if(item.id == product.id) {
        return {...item, quantity: item.quantity + 1}
      }
      return item
    })
    setCartList(updatedCart)
    return toast.success("Product updated")
  }

  return (
    <Fragment>
      <div className="d-flex flex-wrap gap-2 justify-content-center py-3 bg-secondary">
      {shopProducts.map((product) => {
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
              <button className="btn btn-success w-100 mt-2" onClick={() => handleAddToCart(product)}>
                <FaShoppingCart /> Add To Cart
              </button>
            </div>
          </div>
        );
      })}
      </div>
      <Cart />
    </Fragment>
  );
};

export default ShopPages;
