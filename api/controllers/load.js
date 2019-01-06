import logger from '../../utils/logger';

const data = [
  {
    id: 1,
    broker: 'SomeBroker',
    pickup: '11 53rd Street New Orleans, LA',
    dropoff: '344 C Ave Miami, FL'
  },
  {
    id: 2,
    broker: 'SomeOtherBroker',
    pickup: '11 53rd Street New Orleans, LA',
    dropoff: '344 C Ave Miami, FL'
  },
  {
    id: 3,
    broker: 'AnotherBroker',
    pickup: '11 53rd Street New Orleans, LA',
    dropoff: '344 C Ave Miami, FL'
  },
  {
    id: 4,
    broker: 'SomeBroker',
    pickup: '11 53rd Street New Orleans, LA',
    dropoff: '344 C Ave Miami, FL'
  },
  {
    id: 5,
    broker: 'SomeOtherBroker',
    pickup: '11 53rd Street New Orleans, LA',
    dropoff: '344 C Ave Miami, FL'
  }
];

export default {
  getAll(req, res) {
    res.json(data);
  },
  getOne(req, res, next) {
    logger.info(
      `Params: ${Object.keys(req.params).map(v => `${v}: ${req.params[v]}`)}`
    );
    const load = data.find(item => item.id === parseInt(req.params.id));

    if (load) {
      res.json(load);
    } else {
      next();
    }
  }
};
