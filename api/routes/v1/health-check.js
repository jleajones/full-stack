import express from 'express';
import healthCheckController from '../../controllers/health-check';

const router = express.Router();

router.get('/', healthCheckController);

export default router;