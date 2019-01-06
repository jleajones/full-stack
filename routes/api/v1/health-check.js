import express from 'express';
import HealthCheckController from '../../../controllers/api/v1/health-check';

const router = express.Router();

router.get('/', HealthCheckController);

export default router;
