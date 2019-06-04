import { Router } from 'express';

import verifyToken from '../../middleware/jwt/verifyToken';

import findPost from '../../middleware/post/common/findPost';

import commentValidation from '../../middleware/post/comment/common/_validation';

import checkValidation from '../../middleware/common/checkValidation';

import createComment from '../../middleware/post/comment/createComment';

const router = Router();

router.use(verifyToken);

router.post('/write', findPost, commentValidation);

router.use(checkValidation);

router.post('/write', createComment);

export default Router;
