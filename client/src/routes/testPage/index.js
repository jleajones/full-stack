import React from 'react';
import { StripeProvider } from 'react-stripe-elements';

import Page from '../../components/page';
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
      <Page pageTitle="Test Page Title">
        <div className="gr-12">
          <StripeProvider stripe={stripe}>
            <TestComponent />
          </StripeProvider>
        </div>
      </Page>
    );
  }
}

export default TestPage;
