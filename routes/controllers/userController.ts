import { Router } from 'express';

import RegisterValidation from '../middleware/user/register/_validation';

import checkValidation from '../middleware/common/checkValidation';

import checkAuthKey from '../middleware/user/register/checkAuthKey';
import findUser from '../middleware/user/common/findUser';
import passwordEncryption from '..//middleware/user/common/passwordEncryption';
import createUser from '../middleware/user/register/createUser';

const router = Router();

router.post('/register', RegisterValidation);

router.use(checkValidation);

router.post('/register', checkAuthKey, findUser, passwordEncryption, createUser);

export default Router;
