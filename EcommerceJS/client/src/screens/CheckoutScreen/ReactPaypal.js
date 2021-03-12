// import React, { useEffect, useState, useRef } from "react";

// const ReactPaypal = () => {
//   const [paid, setPaid] = useState(false);
//   const [error, setError] = useState(null);
//   const paypal = useRef().current;

//   const renderPaypal = () => {
//     window.paypal.Button.render(
//       {
//         // Configure environment
//         env: "sandbox",
//         client: {
//           sandbox: "demo_sandbox_client_id",
//           production: "demo_production_client_id",
//         },
//         // Customize button (optional)
//         locale: "en_US",

//         // Enable Pay Now checkout flow (optional)
//         commit: true,

//         // Set up a payment
//         payment: function (data, actions) {
//           return actions.payment.create({
//             transactions: [
//               {
//                 amount: {
//                   total: "0.01",
//                   currency: "USD",
//                 },
//               },
//             ],
//           });
//         },
//         // Execute the payment
//         onAuthorize: function (data, actions) {
//           return actions.payment.execute().then(function () {
//             // Show a confirmation message to the buyer
//             window.alert("Thank you for your purchase!");
//           });
//         },
//       },
//       "#paypal-button"
//     );
//   };

//   return { renderPaypal };
// };

// export default ReactPaypal;
