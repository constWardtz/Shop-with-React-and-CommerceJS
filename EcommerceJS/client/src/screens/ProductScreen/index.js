import React from "react";

import ProductList from "./Elements/ProductList";

import "./index.css";

const ProductScreen = ({ products, handleProductOverview }) => {
  return (
    <div className="products">
      <ProductList
        products={products}
        onProductOverview={handleProductOverview}
      />
    </div>
  );
};

export default ProductScreen;
