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
import PostLike from './postLike';

@Table({
  timestamps: true,
})
export default class Post extends Model<Post> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public pk: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  public userPk: string;

  @Column(DataType.STRING)
  public title: string;

  @Column(DataType.TEXT)
  public content: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public author: string;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  public user: User;

  @HasMany(() => PostLike, {
    onDelete: 'CASCADE',
  })
  public postLike: PostLike;
}
