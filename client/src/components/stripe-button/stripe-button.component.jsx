import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H1MKYBbc0cupNSsk8TIVGwRz9cEJlRLUrXZh92ubsmoj4xvuRUyLjTXlUWimUaeYUNeqermE28PKsrNOi7jcrf700hQpLe5zo";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "POST",
      data: { amount: priceForStripe, token },
    })
      .then((response) => {
        alert("Payment Succesful!");
      })
      .catch((error) => {
        console.log("Payment error", JSON.parse(error));
        alert(
          "There ws an issue with your payment. please sure you use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
