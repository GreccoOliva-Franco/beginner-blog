import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { CommentContent, CommentInfo } from '../@types';
import { PostsEntity } from './post.entity';
import { UsersEntity } from './user.entity';

@Entity('comments')
export class CommentEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => PostsEntity, post => post.comments)
  post: PostsEntity;

  // user comments relations
  @ManyToOne(() => UsersEntity, user => user.comments)
  user: UsersEntity;

  get commentContent(): CommentContent {
    return {
      id: this.id,
      user: this.user,
      post: this.post,
      content: this.content,
      createdAt: this.createdAt,
    };
  }

  get commentInfo(): CommentInfo {
    return {
      id: this.id,
      user: this.user,
      post: this.post,
      createdAt: this.createdAt,
    };
  }
}
