import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommentContent, CommentInfo } from '../@types';

@Entity('posts')
export class CommentEntity {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	userId: string;

	@Column()
	postId: string;

	@Column()
	content: string;

	@CreateDateColumn()
	createdAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	get commentContent(): CommentContent {
		return {
			id: this.id,
			userId: this.userId,
			postId: this.postId,
			content: this.content,
			createdAt: this.createdAt,
		};
	}

	get commentInfo(): CommentInfo {
		return {
			id: this.id,
			userId: this.userId,
			postId: this.postId,
			createdAt: this.createdAt,
		};
	}
}
