import React, { useRef, useEffect } from "react";
import { commerce_checkout } from "../../lib/commerce";

const CheckoutScreen = () => {
  const elementExist = document.querySelector(`#paypal-button`);

  const paypal = useRef();

  const renderPaypal = () => {
    window.paypal
      .Buttons({
        // Configure environment
        env: "sandbox",
        client: {
          sandbox: "demo_sandbox_client_id",
          production: "demo_production_client_id",
        },
        // Customize button (optional)
        locale: "en_US",

        // Enable Pay Now checkout flow (optional)
        commit: true,

        // Set up a payment
        payment: function (data, actions) {
          return actions.payment.create({
            transactions: [
              {
                amount: {
                  total: "0.01",
                  currency: "USD",
                },
              },
            ],
          });
        },
        // Execute the payment
        onAuthorize: function (data, actions) {
          return actions.payment.execute().then(function () {
            // Show a confirmation message to the buyer
            window.alert("Thank you for your purchase!");
          });
        },
      })
      .render(paypal.current);
  };

  useEffect(() => {
    if (elementExist && !renderPaypal) {
      <h1>loading...</h1>;
      console.log("not exist");
    } else {
      renderPaypal();
    }
    return () => {};
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      <br />
      <div ref={paypal}></div>
    </div>
  );
};

export default CheckoutScreen;
