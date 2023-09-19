const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
        <button className="addToCartBttn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
