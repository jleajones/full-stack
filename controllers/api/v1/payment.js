import Stripe from 'stripe';
import config from '../../../config';
import logger from '../../../utils/logger';

const PaymentController = {
  index: (req, res) => {
    logger.info(config.toString());
    res.send({
      name: 'Payment',
      status: 'Everything is ok'
    });
  },
  charge: async (req, res, next) => {
    const stripe = new Stripe(config.get('stripe.secret_key'));
    try {
      const { status } = await stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        description: 'An example charge',
        source: req.body.id
      });

      res.json({ status });
    } catch (err) {
      next(err);
    }
  }
};

export default PaymentController;
