import { NextFunction, Request, Response } from 'express';

const login = (req: Request, res: Response, next: NextFunction) => {
  const { user, temp } = res.locals;
  try {
    if (user.password === temp.password) {
      next();
    } else {
      res.status(400).json({
        result: {
          SUCCESS: false,
          message: '비밀번호가 알맞지 않습니다.',
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

export default login;
