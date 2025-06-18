import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_12345'); // mock key

function BuyCreditsButton() {
  const handleClick = async () => {
    const stripe = await stripePromise;

    // Simulate redirect
    alert("Stripe Checkout would open here (simulation)");

    // In real case:
    // await stripe.redirectToCheckout({ sessionId: "mock_session_123" });
  };

  return (
    <button className="primary-button" onClick={handleClick}>
      Buy Extra Credit
    </button>
  );
}

export default BuyCreditsButton;


