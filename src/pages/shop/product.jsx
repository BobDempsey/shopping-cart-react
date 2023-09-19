import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
