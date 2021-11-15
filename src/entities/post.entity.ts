import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PostInfo, PostContent } from '../@types';

@Entity('posts')
export class PostsEntity {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	title: string;

	@Column()
	slug: string;

	@Column()
	ownerId: string;

	@Column()
	content: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	@BeforeInsert()
	slugify() {
		const text = this.title
							.toString()
							.trim()
							.toLowerCase()
							.replace(/\s+/g, "-")
							.replace(/[^\w-]+/g, "")
							.replace(/--+/g, "-")
							.replace(/^-+/, "")
							.replace(/-+$/, "");
		const date = String(Number(new Date()));
		this.slug = text + "-" + date;
	}

	@BeforeUpdate()
	slugifyUpdate() {
		const text = this.title
							.toString()
							.trim()
							.toLowerCase()
							.replace(/\s+/g, "-")
							.replace(/[^\w-]+/g, "")
							.replace(/--+/g, "-")
							.replace(/^-+/, "")
							.replace(/-+$/, "");
		const date = String(Number(new Date()));
		this.slug = text + "-" + date;
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
