import { body, ValidationChain } from 'express-validator/check';

import { title, content } from '../../../config/regexp.json';

const postValidation: ValidationChain[] = [
  body('title')
    .isString()
    .matches(title),
  body('content')
    .isString()
    .matches(content),
];

export default postValidation;
