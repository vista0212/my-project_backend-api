import { Router } from 'express';

import userController from './controllers/userController';

const router = Router();

router.use('/user', userController);

export default router;
