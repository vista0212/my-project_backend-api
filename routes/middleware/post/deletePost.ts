import { NextFunction, Request, Response } from 'express';
import Post from '../../../database/models/post';

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  const post: Post = res.locals.post;

  try {
    await Post.destroy({
      where: {
        pk: post.pk,
      },
    });

    res.status(200).json({
      result: {
        SUCCESS: true,
        message: '게시글이 삭제되었습니다.',
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

export default deletePost;
