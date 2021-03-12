import React from "react";

import "./index.css";

const ProductOverviewScreen = ({ singleProduct, addToCart }) => {
  if (!singleProduct) return <h1>Loading...</h1>;
  const { id, name, media, price, description } = singleProduct;
  return (
    <div className="product-overview">
      <div className="product-overview__content" key={id}>
        <div className="product-overview__img">
          <img src={media.source} alt={name} />
        </div>
        <div className="product-overview__details">
          <div className="product-overview__text">
            <h1>{name}</h1>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <p>{price.formatted_with_symbol}</p>
            <select>
              <option>Colors</option>
              <option>AB</option>
            </select>
          </div>
          <div className="product-overview__actions">
            <button onClick={() => addToCart(id)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverviewScreen;
