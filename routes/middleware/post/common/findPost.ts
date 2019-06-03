import { NextFunction, Request, Response } from 'express';
import Post from '../../../../database/models/post';

const findPost = (req: Request, res: Response, next: NextFunction) => {
  const pk = req.query.postId;

  try {
    Post.findOne({
      where: pk,
    }).then((post: Post) => {
      if (post) {
        res.locals.post = post;
        next();
      } else {
        res.status(400).json({
          result: {
            SUCCESS: false,
            message: '존재하지 않은 게시글입니다.',
          },
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      result: {
        SUCCESS: false,
        messsage: 'Server Error',
      },
    });
  }
};

export default findPost;
