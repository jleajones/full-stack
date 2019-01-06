import express from 'express';
import loadController from '../../controllers/load';

const router = express.Router();

router.get('/', loadController.getAll);
router.get('/:id', loadController.getOne);

export default router;