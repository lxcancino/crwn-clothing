import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publichableKey =
    'pk_test_51GqeT2C7YCQLccbs2YSpvUQFwQVzdb3WztslFcELUQ75Oncjgdh1jUbjV5IeOH6oDZscTEmcbmcbYOgmcyLFrMIN00cUmJF6YF';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publichableKey}
    />
  );
};

export default StripeCheckoutButton;
