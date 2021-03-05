import React from "react";

import "./index.css";

const ProductList = ({ products, addToCart }) => {
  if (!products.length) return <h1 className="loader">Loading...</h1>;
  const truncate = (str) => {
    const num = 70;
    if (str <= num) return str;
    return `${str.substring(num, 0)}...`;
  };

  return (
    <>
      <div className="product__list">
        {products.map((product) => (
          <div className="product__item" key={product.id}>
            <img src={product.media.source} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.price.formatted_with_symbol}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: truncate(product.description),
              }}
            ></p>
            <button onClick={() => addToCart(product.id)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
