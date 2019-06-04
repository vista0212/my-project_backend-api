import { Router } from 'express';

import verifyToken from '../middleware/jwt/verifyToken';
import postValidation from '../middleware/post/_validation';
import checkValidation from '../middleware/common/checkValidation';

import findPost from '../middleware/post/common/findPost';

import createPost from '../middleware/post/createPost';
import checkUser from '../middleware/post/common/checkUser';
import deletePost from '../middleware/post/deletePost';
import editPost from '../middleware/post/editPost';

const router = Router();

router.use(verifyToken);

router.post('/write', postValidation);
router.delete('/delete', findPost, checkUser, deletePost);
router.put('/edit', postValidation);

router.use(checkValidation);

router.post('/write', createPost);
router.put('/edit', findPost, checkUser, editPost);

export default Router;
