import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator/check';

const checkValidation = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  if (result.array().length) {
    console.log(result.array());
    res.status(400).json({
      result: {
        SUCCESS: false,
        message: '데이터 형식 오류',
      },
    });
  } else {
    next();
  }
};

export default checkValidation;
