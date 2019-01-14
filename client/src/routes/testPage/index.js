import React from 'react';
import Helmet from 'react-helmet';
import { StripeProvider } from 'react-stripe-elements';

import TestComponent from '../../asyncComponents/TestComponent';

class TestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stripe: null };
  }

  componentDidMount() {
    this.setState({
      stripe: window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    });
  }

  render() {
    const { stripe } = this.state;

    return (
      <div>
        <Helmet title="Test Page Title" />
        <StripeProvider stripe={stripe}>
          <TestComponent />
        </StripeProvider>
      </div>
    );
  }
}

export default TestPage;