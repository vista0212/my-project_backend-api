import { NextFunction, Request, Response } from 'express';
import Comment from '../../../../../database/models/comment';

const findComment = (req: Request, res: Response, next: NextFunction) => {
  const pk = req.query.commentPk;

  try {
    Comment.findOne({
      where: pk,
    }).then((comment: Comment) => {
      if (comment) {
        res.locals.comment = comment;
        next();
      } else {
        res.status(400).json({
          result: {
            SUCCESS: false,
            message: '존재하지 않은 댓글입니다.',
          },
        });
      }
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

export default findComment;
