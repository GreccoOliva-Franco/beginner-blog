import { UsersEntity } from './user.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('roles')
export class RoleEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'enum', enum: ['ADMIN', 'USER', 'WRITER', 'MODERATOR'], default: 'USER' })
	name: string;

	@Column({ type: 'varchar', length: 50 })
	description: string;

	@Column({ type: 'boolean', default: true })
	isActive: boolean;

	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt: Date;

	@ManyToMany(() => UsersEntity, user => user.role, {
		cascade: true,
	})
	@JoinTable({
		name: 'users_roles',
		joinColumn: { name: 'roleId', referencedColumnName: 'id' },
		inverseJoinColumn: { name: 'userId', referencedColumnName: 'id' },
	})
	users: UsersEntity[];

}
