import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="border rounded-lg shadow-sm px-4 py-6 text-center bg-white">
      <img
        src={productImage}
        alt={productName}
        className="mb-6 object-contain h-48 w-full"
      />
      <div>
        <p className="my-1">
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
        <button
          className="text-slate-700 border border-slate-800 rounded-full px-4 py-2 font-medium hover:bg-slate-800
           hover:text-white transition mt-6"
          onClick={() => addToCart(id)}
        >
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
