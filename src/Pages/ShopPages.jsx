import { FaShoppingCart, FaStar } from "react-icons/fa";
import { shopProducts } from "../Constants/shop";
import { Fragment } from "react";
import { useCart } from "../Providers/CartProvider";
import toast from "react-hot-toast";
import Header from "../Components/Header";
import ProductList from "../Components/ProductList";

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
      <Header />
      <div className="d-flex flex-wrap gap-2 justify-content-center py-3 bg-secondary">
      {shopProducts.map((product) => {
        return <ProductList product={product} key={product.id}>
            <button className="btn btn-success w-100 mt-2" onClick={() => handleAddToCart(product)}>
              <FaShoppingCart /> Add To Cart
          </button>
        </ProductList>
       })}
      </div>
    </Fragment>
  );
};

export default ShopPages;
