import { NextFunction, Request, Response } from 'express';

import { key } from '../../../../config/authKey.json';

const checkAuthKey = (req: Request, res: Response, next: NextFunction) => {
  const { authKey } = req.body;
  try {
    if (authKey == key) {
      next();
    } else {
      res.status(400).json({
        result: {
          SUCCESS: false,
          message: '잘못된 인증 키입니다.',
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      result: {
        SUCCESS: false,
        message: 'Server Error',
      },
    });
  }
};

export default checkAuthKey;
