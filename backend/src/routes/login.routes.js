import express from 'express';
import { loginController } from '../controllers/loginTranspack';
const cors = require('cors');

// // import { verifyLocalSystem } from '../middlewares/verifyLocalSystem';

const router = express.Router();

router.use(cors());
router.use(express.json());
// // router.use(verifyLocalSystem);

router.get('/', loginController.getLogin);
export default router;
