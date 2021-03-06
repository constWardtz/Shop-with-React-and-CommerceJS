import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { commerce } from "./lib/commerce";
import { useDispatch, useSelector } from "react-redux";

import {
  ProductScreen,
  CartScreen,
  HomeScreen,
  Navbar,
  CheckoutScreen,
  ProductOverviewScreen,
} from "./screens";

import { currentItemSlice, addToCartSlice } from "./features";

const App = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const currentItemState = useSelector((state) => state.current.item);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});
  const [lineItems, setLineItems] = useState({});
  const [token, setToken] = useState("");

  const handleLineItems = () => {
    // cart.line_items.map(({ id, quantity }) => setLineItems({ id, quantity }));
  };
  console.log("cartState", cartState);

  const [order] = useState({
    // line_items: {
    //   [lineItems.id]: {
    //     quantity: lineItems.quantity,
    //     variants: {
    //       [lineItems.map(a => a.variants)]: 32
    //       // vrnt_p6dP5g0M4ln7kA: "optn_DeN1ql93doz3ym",
    //     },
    //   },
    // },
    customer: {
      firstname: "Ward",
      lastname: "Doe",
      email: "john.doe@example.com",
    },
    shipping: {
      name: "John Doe",
      street: "123 Fake St",
      town_city: "San Francisco",
      county_state: "US-CA",
      postal_zip_code: "94103",
      country: "US",
    },
    fulfillment: {
      shipping_method: null,
    },
    billing: {
      name: "John Doe",
      street: "234 Fake St",
      town_city: "San Francisco",
      county_state: "US-CA",
      postal_zip_code: "94103",
      country: "PH",
    },
    payment: {
      gateway: "paypal",
      card: {
        token: "irh98298g49",
      },
    },
    pay_what_you_want: "149.99",
  });

  const handleFetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const handleFetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId) => {
    const response = await commerce.cart.add(productId, 1);
    const { cart, success, event, product_id } = response;
    setCart(cart);
    dispatch(addToCartSlice({ success, event, product_id }));
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

  const handleProductOverview = (id) => {
    const item = products.find((product) => product.id === id);
    dispatch(currentItemSlice(item));
  };

  console.log("currentItemState", currentItemState);

  const handleGenerateToken = () => {
    try {
      commerce.checkout
        .generateTokenFrom("cart", cart.id)
        .then((response) => setToken(response.id));
    } catch (err) {
      console.log("generate token error: ", err);
    }
  };

  const handleCaptureOrder = () => {
    try {
      commerce.checkout
        .capture(token, order)
        .then((response) => console.log("response: ", response))
        .catch((err) => console.log("err: ", err));
    } catch (error) {
      console.log("handle Capture error: ", error);
    }
  };

  // const handleOrderDetails = async () => {
  //   // if (!cart.line_items.length) return <h1>loading...</h1>;
  //   // await cart.line_items.map(({ id, quantity, variants }) => {
  //   //   setOrderDetails({ [id]: { quantity, variants: { color: "blue" } } });
  //   // });
  // };

  useEffect(() => {
    handleFetchProducts();
    handleFetchCart();
    return () => {};
  }, []);

  useEffect(() => {
    handleGenerateToken();
    return () => {};
  }, []);

  // useEffect(() => {
  //   handleOrderDetails();
  //   return () => {};
  // }, []);

  useEffect(() => {
    handleCaptureOrder();
    return () => {};
  }, []);

  useEffect(() => {
    handleLineItems();
    return () => {};
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
            <ProductScreen
              products={products}
              handleProductOverview={handleProductOverview}
            />
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

          <Route path="/checkout">
            <Navbar totalItems={cart.total_items} />
            <CheckoutScreen />
          </Route>

          {!currentItemState ? (
            <Redirect to="/products" />
          ) : (
            <Route path="/productOverview/:id">
              <Navbar totalItems={cart.total_items} />
              <ProductOverviewScreen
                singleProduct={currentItemState}
                addToCart={handleAddToCart}
              />
            </Route>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default App;
