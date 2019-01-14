import React from 'react';
import { CardElement, Elements, injectStripe } from 'react-stripe-elements';

import API from '../../api';

const handleBlur = () => {
  console.log('[blur]');
};

const handleChange = change => {
  console.log('[change]', change);
};

const handleFocus = () => {
  console.log('[focus]');
};

const handleReady = () => {
  console.log('[ready]');
};

class CardForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.createToken().then(payload => {
        API.post('api/payment/charge', { id: payload.token.id }).then(resp => {
          console.log(resp);
        });
      });
    } else {
      console.log('Form submitted before Stripe.js loaded.');
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Payment Info</label>
        {this.props.stripe ? (
          <CardElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
          />
        ) : (
          <div className="StripeElement loading" />
        )}
        <button disabled={!this.props.stripe}>Pay</button>
      </form>
    );
  }
}

const CardFormHOC = injectStripe(CardForm);

const Checkout = () => {
  return (
    <div className="Checkout">
      <Elements>
        <CardFormHOC />
      </Elements>
    </div>
  );
};

class TestComponent extends React.Component {
  componentDidMount() {
    API.get(`api/health-check`).then(resp => {
      console.log(resp);
    });
  }

  onClick = e => console.log(e);

  render() {
    return (
      <div>
        <Checkout />
      </div>
    );
  }
}

export default TestComponent;
