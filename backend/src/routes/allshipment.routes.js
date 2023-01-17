import express from 'express';
import { allShipmentController } from '../controllers/allShipmentController';

const cors = require('cors');

//import { verifyLocalSystem } from '../middlewares/verifyLocalSystem';

const router = express.Router();

router.use(cors());
router.use(express.json());
//router.use(verifyLocalSystem);

router.get('/', allShipmentController.getallshipment);

export default router;
    