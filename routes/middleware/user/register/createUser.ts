import { NextFunction, Request, Response } from 'express';

import User from '../../../../database/models/user';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id, name } = req.body;
  const { password, passwordKey } = res.locals.temp;

  try {
    const user: User = await User.create({
      id,
      password,
      passwordKey,
      name,
    });

    res.status(200).json({
      result: {
        SUCCESS: true,
        message: '회원가입에 성공했습니다.',
      },
      data: {
        userName: user.name,
      },
    });
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

export default createUser;
