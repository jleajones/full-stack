import React, { Component } from 'react';
import { StripeProvider } from 'react-stripe-elements';

import './App.css';
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { stripe: null };
  }
  componentDidMount() {
    // Create Stripe instance in componentDidMount
    // (componentDidMount only fires in browser/DOM environment)
    this.setState({
      stripe: window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    });
  }

  render() {
    const { stripe } = this.state;

    return (
      <StripeProvider stripe={stripe}>
        <Routes />
      </StripeProvider>
    );
  }
}

export default App;
