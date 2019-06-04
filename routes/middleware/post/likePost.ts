import { NextFunction, Request, Response } from 'express';
import Post from '../../../database/models/post';
import User from '../../../database/models/user';
import PostLike from '../../../database/models/postLike';

const likePost = (req: Request, res: Response, next: NextFunction) => {
  const post: Post = res.locals.post;
  const user: User = res.locals.user;

  try {
    PostLike.findOne({
      where: {
        postPk: post.pk,
        userPk: user.pk,
      },
    }).then(async (postLike: PostLike) => {
      if (postLike) {
        await PostLike.destroy({
          where: {
            pk: postLike.pk,
          },
        });

        res.status(200).json({
          result: {
            SUCCESS: true,
            message: '좋아요가 취소되었습니다.',
          },
        });
      } else {
        await PostLike.create({
          postPk: post.pk,
          userPk: user.pk,
        });

        res.status(200).json({
          result: {
            SUCCESS: true,
            message: '좋아요에 성공했습니다.',
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

export default likePost;
