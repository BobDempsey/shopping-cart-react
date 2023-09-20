import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <div className="bg-slate-800 text-white flex items-center justify-between h-16 p-4">
      <div className="text-2xl font-medium tracking-tight">
        <Link to="/">React eCommerce</Link>
      </div>
      <div className="flex items-center space-x-6 font-medium text-lg">
        {/* <Link to="/">Shop</Link> */}
        <Link to="/cart" className="p-4">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
