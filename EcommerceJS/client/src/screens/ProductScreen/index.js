import React from "react";

import ProductList from "./Elements/ProductList";

import "./index.css";

const ProductScreen = ({ products, addToCart }) => {
  return (
    <div className="products">
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default ProductScreen;
