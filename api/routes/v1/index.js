import express from 'express';
import healthCheck from './health-check';

const router = express.Router();

router.use('/health-check', healthCheck);

router.get('/', (req, res) => {
    res.json({
        'version': 1
    })
});


export default router;