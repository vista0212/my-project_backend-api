import { NextFunction, Request, Response } from 'express';
import Post from 'database/models/post';
import User from 'database/models/user';

const checkUser = (req: Request, res: Response, next: NextFunction) => {
  const post: Post = res.locals.post;
  const user: User = res.locals.user;

  try {
    if (post.userPk === user.pk) {
      next();
    } else {
      res.status(403).json({
        result: {
          SUCCESS: false,
          message: '권한이 없습니다.',
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

export default checkUser;
