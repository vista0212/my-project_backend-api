import { Router } from 'express';

import verifyToken from '../middleware/jwt/verifyToken';
import postValidation from '../middleware/post/_validation';
import checkValidation from '../middleware/common/checkValidation';

import findPost from '../middleware/post/common/findPost';

import createPost from '../middleware/post/createPost';
import checkUser from '../middleware/post/common/checkUser';
import deletePost from '../middleware/post/deletePost';

const router = Router();

router.use(verifyToken);

router.post('/write', postValidation);
router.post('/delete', findPost, checkUser, deletePost);

router.use(checkValidation);

router.post('/write', createPost);

export default Router;
