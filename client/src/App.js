import React, { Component } from 'react';
import { StripeProvider } from 'react-stripe-elements';

import './App.css';
import TestComponent from './asyncComponents/TestComponent';

class App extends Component {
  constructor() {
    super();
    this.state = { stripe: null };
  }
  componentDidMount() {
    // Create Stripe instance in componentDidMount
    // (componentDidMount only fires in browser/DOM environment)
    this.setState({ stripe: window.Stripe('pk_test_12345') });
  }

  render() {
    const { stripe } = this.state;

    return (
      <StripeProvider stripe={stripe}>
        <TestComponent />
      </StripeProvider>
    );
  }
}

export default App;
