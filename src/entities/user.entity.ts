import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../@types';

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

	@BeforeInsert()
	hashPassword(): void {
        const salt = genSaltSync();
        this.password = hashSync(this.password, salt);
    }

    validatePassword(password: string): boolean {
        return compareSync(password, this.password);
    }


	get userInfo(): User {
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
}
