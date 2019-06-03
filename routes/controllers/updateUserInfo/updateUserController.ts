import { Router } from 'express';

import verifyToken from '../../middleware/jwt/verifyToken';

import passwordValidation from '../../middleware/user/change/password/_validation';

import checkValidation from '../../middleware/common/checkValidation';
import passwordEncryption from '../../middleware/user/common/passwordEncryption';

import changePassword from '../../middleware/user/change/password/changePassword';

const router = Router();

router.use(verifyToken);

router.patch('/password', passwordValidation, checkValidation, passwordEncryption, changePassword);

export default Router;
