import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PostInfo, PostContent } from '../@types';
import { CommentEntity } from './comment.entity';
import { UsersEntity } from './user.entity';

@Entity('posts')
export class PostsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  slug: string;

  @Column({ type: 'varchar' })
  ownerId: string;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;

  @ManyToMany(() => CommentEntity, comment => comment.post)
  comments: CommentEntity[];

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  slugify() {
    this.title = this.slugifyTitle(this.title);
  }

  slugifyTitle(title: string) {
    const text = title
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
    const date = String(Number(new Date()));
    return text + '-' + date;
  }
  get postContent(): PostContent {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
      ownerId: this.ownerId,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  get postInfo(): PostInfo {
    return {
      id: this.id,
      ownerId: this.ownerId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
