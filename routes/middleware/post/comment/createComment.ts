import { NextFunction, Request, Response } from 'express';

import Comment from '../../../../database/models/comment';

const createComment = async (req: Request, res: Response, next: NextFunction) => {
  const { comment } = req.body;
  const { user, post } = res.locals;

  try {
    await Comment.create({
      postPk: post.pk,
      userPk: user.pk,
      content: comment,
      author: user.name,
    });

    res.status(200).json({
      result: {
        SUCCESS: true,
        message: '댓글이 작성되었습니다.',
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

export default createComment;
