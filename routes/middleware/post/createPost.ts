import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';
import Post from '../../../database/models/post';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  const { title, content } = req.body;

  try {
    await Post.create({
      userPk: user.pk,
      title: title,
      content: content,
      author: user.name,
    });

    res.status(200).json({
      result: {
        SUCCESS: true,
        message: '게시글 작성에 성공했습니다.',
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

export default createPost;
