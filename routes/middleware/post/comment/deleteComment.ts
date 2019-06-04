import { NextFunction, Request, Response } from 'express';

import Comment from '../../../../database/models/comment';

const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  const comment: Comment = res.locals.comment;

  try {
    await Comment.destroy({
      where: {
        pk: comment.pk,
      },
    });

    res.status(200).json({
      result: {
        SUCCESS: true,
        message: '댓글이 삭제되었습니다.',
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

export default deleteComment;
