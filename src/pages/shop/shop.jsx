import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";

const shop = () => {
  return (
    <div>
      <div className="shop">
        <div className="shopTitle">
          <h1>Shop</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default shop;
