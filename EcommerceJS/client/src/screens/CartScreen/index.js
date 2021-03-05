import React from "react";

import "./index.css";

const CartScreen = ({ cart, emptyCart, removeFromCart, updateCartQty }) => {
  if (!cart.line_items) return <h1 className="loader">Loading...</h1>;

  return (
    <div className="cart">
      <div className="cart__content">
        <div className="cart__actions top__buttons">
          <button onClick={emptyCart} className="cart--action">
            Empty Cart
          </button>
          <button className="cart--action active">Make Purchase</button>
        </div>
        <div className="cart__heading">
          <h1>Img</h1>
          <h1>Name</h1>
          <h1>Qty</h1>
          <h1>Price</h1>
          <h1>Actions</h1>
        </div>
        {cart.line_items.map((item) => (
          <div className="cart__item" key={item.product_id}>
            <img src={item.media.source} alt={item.product_name} />
            <p>{item.product_name}</p>
            <p>{item.quantity}</p>
            <p>{item.price.formatted_with_symbol}</p>
            <div className="cart__actions">
              <button onClick={() => updateCartQty(item.id, item.quantity + 1)}>
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartScreen;
