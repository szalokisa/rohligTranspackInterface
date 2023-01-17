import express from 'express';
import { shipmentByIdController } from '../controllers/shipmentByIdController';

const cors = require('cors');

//import { verifyLocalSystem } from '../middlewares/verifyLocalSystem';

const router = express.Router();

router.use(cors());
router.use(express.json());
//router.use(verifyLocalSystem);

router.get('/', shipmentByIdController.getshipmentbyid);

export default router;
    