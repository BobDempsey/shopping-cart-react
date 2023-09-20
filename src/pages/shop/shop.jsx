import { PRODUCTS } from "../../products";
import Product from "./product";

const shop = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h1 className="text-4xl font-medium tracking-tight">
            React eCommerce
          </h1>
          <p className="text-xl max-w-3xl mt-4 mb-10 tracking-normal">
            A fully responsive React eCommerce/Shopping Cart application using
            Create React App, TailwindCSS, the React Context API, and Vercel for
            CI/CD.
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
