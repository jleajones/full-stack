import express from 'express';
import AuthController from '../../controllers/auth';

const router = express.Router();

router.get('/auth', AuthController);

export default router;
