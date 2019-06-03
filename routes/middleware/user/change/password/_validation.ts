import { body, ValidationChain } from 'express-validator/check';

import { password } from '../../../../../config/regexp.json';

const passwordValidation: ValidationChain[] = [
  body('password')
    .isString()
    .matches(password),
];

export default passwordValidation;
