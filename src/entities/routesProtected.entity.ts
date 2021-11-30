import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { RoleEntity } from './role.entity';

@Entity('routes_protected')
export class RoutesProtectedEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'varchar' })
	route: string;

	@Column({ type: 'varchar' })
	method: string;

	@ManyToMany(() => RoleEntity, (roles) => roles.routes)
	roles: RoleEntity[];

	@Column({ type: 'boolean', default: true })
	isActive: boolean;

	@Column({ type: 'varchar', nullable: true })
	description: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
