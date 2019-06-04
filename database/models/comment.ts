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
export default class Comment extends Model<Comment> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public pk: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  public userPk: string;

  @ForeignKey(() => Post)
  @Column(DataType.INTEGER)
  public postPk: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  public author: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  public content: string;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  public user: User;

  @BelongsTo(() => Post, {
    onDelete: 'CASCADE',
  })
  public post: Post;
}
