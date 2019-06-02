import { Router } from 'express';

import RegisterValidation from '../middleware/user/register/_validation';
import LoginValidation from '../middleware/user/login/_validation';

import checkValidation from '../middleware/common/checkValidation';

import findUser from '../middleware/user/common/findUser';
import passwordEncryption from '..//middleware/user/common/passwordEncryption';

import checkAuthKey from '../middleware/user/register/checkAuthKey';
import createUser from '../middleware/user/register/createUser';

import login from '../middleware/user/login/login';
import issueToken from '../middleware/jwt/issueToken';

const router = Router();

router.post('/register', RegisterValidation);
router.post('/login', LoginValidation);

router.use(checkValidation);

router.post('/register', checkAuthKey, findUser, passwordEncryption, createUser);
router.post('/login', findUser, passwordEncryption, login, issueToken);

export default Router;
