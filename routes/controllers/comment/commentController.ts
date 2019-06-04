import { Router } from 'express';

import verifyToken from '../../middleware/jwt/verifyToken';

import findPost from '../../middleware/post/common/findPost';

import commentValidation from '../../middleware/post/comment/common/_validation';

import checkValidation from '../../middleware/common/checkValidation';

import createComment from '../../middleware/post/comment/createComment';
import findComment from '../../middleware/post/comment/common/findComment';
import checkUserComment from '../../middleware/post/comment/common/checkUserComment';
import deleteComment from '../../middleware/post/comment/deleteComment';

const router = Router();

router.use(verifyToken, findPost);

router.post('/write', commentValidation);
router.delete('/delete', findComment, checkUserComment, deleteComment);

router.use(checkValidation);

router.post('/write', createComment);

export default Router;
