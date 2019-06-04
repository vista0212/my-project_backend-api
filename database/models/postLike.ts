import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
  HasMany,
  Default,
} from 'sequelize-typescript';
import User from './user';
import Post from './post';

@Table({
  timestamps: true,
})
export default class PostLike extends Model<PostLike> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public pk: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  public userPk: string;

  @ForeignKey(() => Post)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public postPk: number;

  @CreatedAt
  public createdAt: Date;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  public user: User;

  @BelongsTo(() => Post, {
    onDelete: 'CASCADE',
  })
  public post: Post;
}
