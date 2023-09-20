import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="shadow rounded-lg p-6 flex justify-between items-center space-x-10 bg-white overflow-hidden">
      <div className="w-1/3 shrink-0">
        <img
          src={productImage}
          alt={productName}
          className="h-36 w-full object-contain max-w-[200px]"
        />
      </div>
      <div className="w-full">
        <p className="text-lg mb-1">
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
        <div className="flex items-center mt-6 space-x-2">
          <button
            className="w-[40px] border rounded-lg text-center bg-slate-100 pb-1 text-xl"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>

          <input
            className="w-[75px] border rounded-lg text-center p-0.5 text-lg"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />

          <button
            className="w-[40px] border rounded-lg text-center bg-slate-100 pb-1 text-xl"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
