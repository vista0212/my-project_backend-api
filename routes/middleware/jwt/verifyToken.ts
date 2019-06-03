import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import User from '../../../database/models/user';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  const tokenSecret = process.env.TOKEN_SECRET;

  try {
    const userPk = await jwt.verfiy(token as string, tokenSecret);
    const user = await User.findOne({
      where: {
        pk: userPk,
      },
    });
    if (user) {
      res.locals.user = user;
      next();
    } else {
      res.status(400).json({
        result: {
          SUCCESS: false,
          message: 'user data error',
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

export default verifyToken;
