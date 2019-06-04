import { NextFunction, Request, Response } from 'express';
import Post from 'database/models/post';
import User from 'database/models/user';

const editPost = async (req: Request, res: Response, next: NextFunction) => {
  const post: Post = res.locals.post;
  const user: User = res.locals.user;
  const { title, content } = req.body;

  try {
    await Post.update(
      {
        title: title,
        content: content,
        author: user.name,
      },
      {
        where: {
          pk: post.pk,
        },
      }
    );

    res.status(200).json({
      result: {
        SUCCESS: true,
        message: '게시글이 수정되었습니다.',
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

export default editPost;
