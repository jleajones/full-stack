import express from 'express';
import healthCheck from './health-check';
import load from './load';

const router = express.Router();

router.use('/health-check', healthCheck);
router.use('/load', load);

router.get('/', (req, res) => {
  res.json({
    'health-check': 1,
    load: 1
  });
});

export default router;
