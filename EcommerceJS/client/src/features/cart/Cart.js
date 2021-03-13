import React, { useEffect, useState } from "react";
import { addToCart } from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";

import "./index.css";

const Cart = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const onChangeHandler = (e) => setItem(e.target.value);
  useEffect(() => {
    document.title = "Cart Features";
  }, []);

  console.log("cart: ", cart);

  return (
    <div>
      <h1>Cart Feature</h1>
      <div className="cart--add-to-cart">
        <input
          tyoe="text"
          placeholder="item"
          value={item}
          onChange={onChangeHandler}
        />
        <button onClick={() => dispatch(addToCart({ item }))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
