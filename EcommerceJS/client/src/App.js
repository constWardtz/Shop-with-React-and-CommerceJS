import React, { useEffect, useState } from "react";
import { commerce, commerce_checkout } from "./lib/commerce";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ProductScreen, CartScreen, HomeScreen, Navbar } from "./screens";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleFetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const handleFetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId) => {
    const { cart } = await commerce.cart.add(productId, 1);
    setCart(cart);
  };

  const handleRefreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const { cart } = await commerce.cart.update(lineItemId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const { cart } = await commerce.cart.remove(lineItemId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const getPaypalPaymentId = async (checkoutTokenId, orderDetails) => {
    try {
      const paypalAuth = await commerce_checkout.checkout.capture(
        checkoutTokenId,
        {
          ...orderDetails,
          payment: "paypal",
          paypal: {
            action: "authorize",
          },
        }
      );
    } catch (err) {
      console.log("Paypal error: ", err);
      return;
    }
  };

  useEffect(() => {
    handleFetchProducts();
    handleFetchCart();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <HomeScreen />
          </Route>

          <Route exact path="/products">
            <Navbar totalItems={cart.total_items} />
            <ProductScreen products={products} addToCart={handleAddToCart} />
          </Route>

          <Route exact path="/cart">
            <Navbar totalItems={cart.total_items} />
            <CartScreen
              cart={cart}
              emptyCart={handleEmptyCart}
              removeFromCart={handleRemoveFromCart}
              updateCartQty={handleUpdateCartQty}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
