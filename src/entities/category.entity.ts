import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CategoryContent, CategoryInfo, CategoryInfoFull } from '../@types';

@Entity('categories')
export class CategoryEntity {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar' })
	name: string;

	@Column({ type: 'varchar' })
	creatorId: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	get categoryContent(): CategoryContent {
		return {
			id: this.id,
			name: this.name,
			creatorId: this.creatorId,
		};
	}

	get categoryInfo(): CategoryInfo {
		return {
			id: this.id,
			creatorId: this.creatorId,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
		};
	}

	get categoryInfoFull(): CategoryInfoFull {
		return { ...this.categoryInfo, name: this.name };
	};
}
