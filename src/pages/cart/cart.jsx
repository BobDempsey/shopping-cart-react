import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from "./cart-item";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getCartSubtotal } = useContext(ShopContext);
  const totalAmount = getCartSubtotal();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight mb-10">
          {totalAmount > 0 ? "Your Cart Items" : "Your Cart is Empty"}
        </h1>
      </div>
      <div className="flex flex-col space-y-3">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] === 0) return null;
          return <CartItem data={product} key={product.id} />;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="mt-12 flex items-center justify-between space-x-12">
          <p className="text-xl font-bold">Subtotal: ${totalAmount}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-slate-700 text-white rounded-full px-4 py-2 hover:bg-slate-800 transition text-lg"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <h1 className="text-lg">
          Add some items to your cart to see them here
        </h1>
      )}
    </div>
  );
};

export default Cart;
