import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

const Navbar = () => {
  const { cartItemsCount } = useContext(ShopContext);
  const count = cartItemsCount();

  return (
    <div className="bg-slate-800 text-white flex items-center justify-between h-16 p-4 bg-gradient-to-r from-slate-800 to-slate-700">
      <div className="text-2xl font-medium tracking-tight">
        <Link to="/">React eCommerce</Link>
      </div>
      <div className="flex items-center space-x-6 font-medium text-lg">
        {/* <Link to="/">Shop</Link> */}
        <div className="relative">
          <Link to="/cart" className="p-4 ">
            <ShoppingCart size={32} />
          </Link>
          {count > 0 && (
            <div className="absolute top-5 -left-6 rounded-full bg-pink-500  w-5 h-5 font-bold text-base grid place-content-center">
              <div className="-mt-[3px]">{count}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
