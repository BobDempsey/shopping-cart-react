import { PRODUCTS } from "../../products";
import Product from "./product";

const shop = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl font-medium tracking-tight">
            React Shopping Cart
          </h1>
          <p className="text-xl max-w-3xl mt-5 tracking-normal mb-4">
            A fully responsive React shopping cart application using Create
            React App, TailwindCSS, the React Context API, and Vercel for CI/CD.
          </p>
          <p className="mb-10 text-xl max-w-3xl">
            Add and remove items to the cart, update items quantities, or clear
            your cart.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default shop;
