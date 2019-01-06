import express from 'express';
import LoadController from '../../../controllers/api/v1/load';

const router = express.Router();

router.get('/', LoadController.getAll);
router.get('/:id', LoadController.getOne);

export default router;
