import { Router } from 'express';

import verifyToken from '../middleware/jwt/verifyToken';
import postValidation from '../middleware/post/_validation';
import checkValidation from '../middleware/common/checkValidation';
import createPost from '../middleware/post/createPost';

const router = Router();

router.use(verifyToken);

router.post('/write', postValidation);

router.use(checkValidation);

router.post('/write', createPost);

export default Router;
