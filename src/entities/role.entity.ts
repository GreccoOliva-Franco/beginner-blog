import { Roles } from './../@types/users.type';
import { UsersEntity } from './user.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';
// eslint-disable-next-line no-shadow

@Entity('roles')
export class RoleEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'enum', enum: Roles, default: 'USER' })
	name: string;

	@Column({ type: 'varchar', length: 50 })
	description: string;

	@Column({ type: 'boolean', default: true })
	isActive: boolean;

	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt: Date;

	@OneToMany(type => UsersEntity, user => user.role)
	users: UsersEntity[];

}
