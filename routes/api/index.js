import express from 'express';
import v1Routes from './v1/index';
// import v2Routes from './v2/index';

const router = express.Router();

router.use('/api', v1Routes);
// router.use('/api/v1', v1Routes);
// router.use('/api', v2Routes);

export default router;
