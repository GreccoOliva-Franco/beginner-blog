import { Roles } from './../@types/users.type';
import { RoleEntity } from './role.entity';
import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { AuthPayload, UserInfoBasic, UserInfoDetailed, UserInfoFull } from '../@types';

@Entity('users')
export class UsersEntity {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('varchar', { length: 255, unique: true })
	username: string;

	@Column('varchar', { length: 255 })
	password: string;

	@Column('varchar', { length: 255 })
	name: string;

	@Column('varchar', { length: 255 })
	lastName: string;

	@Column('varchar', { length: 255, unique: true })
	email: string;

	@Column('varchar', { length: 255 })
	profileImage: string;

	@Column('varchar', { length: 255 })
	description: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;

	@ManyToOne(type => RoleEntity, role => role.users, {
		cascade: true,
		onDelete: 'CASCADE',
	})
	role: RoleEntity;


	@BeforeInsert()
	hashPassword(): void {
        const salt = genSaltSync();
        this.password = hashSync(this.password, salt);
    }

    validatePassword(password: string): boolean {
        return compareSync(password, this.password);
    }

	get userInfoBasic(): UserInfoBasic {
		return {
			id: this.id,
			username: this.username,
			name: this.name,
			lastName: this.lastName,
			profileImage: this.profileImage,
			description: this.description,
		};
	}

	get userInfoDetailed(): UserInfoDetailed {
		return {
			id: this.id,
			username: this.username,
			name: this.name,
			lastName: this.lastName,
			email: this.email,
			profileImage: this.profileImage,
			description: this.description,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
		};
	}

	get userInfoFull(): UserInfoFull {
		return {
			id: this.id,
			username: this.username,
			password: this.password,
			name: this.name,
			lastName: this.lastName,
			email: this.email,
			profileImage: this.profileImage,
			description: this.description,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
		};
	}

	get userJwtPayload(): AuthPayload {
		 return {
			id: this.id,
			email: this.email,
			name: this.name,
			lastName: this.lastName,
			profileImage: this.profileImage,
			username: this.username,
			role: this.role,
		};
	}
}
