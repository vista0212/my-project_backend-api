import { NextFunction, Request, Response } from 'express';

const checkUserComment = (req: Request, res: Response, next: NextFunction) => {
  const { comment, user } = res.locals;

  try {
    if (comment.userPk === user.pk) {
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

export default checkUserComment;
