import React from "react";

import ProductList from "./Elements/ProductList";

import "./index.css";

const ProductScreen = ({ products, addToCart, handleProductOverview }) => {
  return (
    <div className="products">
      <ProductList
        products={products}
        addToCart={addToCart}
        onProductOverview={handleProductOverview}
      />
    </div>
  );
};

export default ProductScreen;
