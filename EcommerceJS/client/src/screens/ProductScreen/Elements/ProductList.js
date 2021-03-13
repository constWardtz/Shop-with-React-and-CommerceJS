import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { truncate } from "../../../utils/truncate";

const ProductList = ({ products, onProductOverview }) => {
  if (!products.length) return <h1 className="loader">Loading...</h1>;

  return (
    <>
      <div className="product__list">
        {products.map(({ id, name, media, price, description }) => (
          <Link to={`/productOverview/${id}`}>
            <div
              className="product__item"
              key={id}
              onClick={() => onProductOverview(id)}
            >
              <img src={media.source} alt={name} />
              <h1>{name}</h1>
              <p>{price.formatted_with_symbol}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: truncate(description),
                }}
              ></p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
