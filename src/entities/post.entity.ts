import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
	SlugBuilder(): void {
		const text: string = this.title.replace(/\s+/gi, "-").replace(/\W/g, "").toLowerCase();
		const date = String(new Date());
		this.slug = text + "-" + date;
	};
}
