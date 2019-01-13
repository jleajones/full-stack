import express from 'express';
import PaymentController from '../../../controllers/api/v1/payment';

const router = express.Router();

router.post('/', PaymentController.index);
router.post('/charge', PaymentController.charge);

export default router;
