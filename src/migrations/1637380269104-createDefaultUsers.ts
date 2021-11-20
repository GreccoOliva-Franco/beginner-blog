import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { UserCreate } from '../@types';
import { RoleEntity } from '../entities/role.entity';
import { UsersEntity } from '../entities/user.entity';

export class createDefaultUsers1637380269104 implements MigrationInterface {

	public users: UserCreate[] = [
		{
			username: 'admin',
			password: 'admin123',
			name: 'admin',
			lastName: 'admin',
			email: 'admin@admin.com',
			profileImage: 'admin',
			description: 'admin',
		},
		{
			username: 'user',
			password: 'user123',
			name: 'user',
			lastName: 'user',
			email: 'user@user.com',
			profileImage: 'user',
			description: 'user',
		},
		{
			username: 'writer',
			password: 'writer123',
			name: 'writer',
			lastName: 'writer',
			email: 'writer@writer.com',
			profileImage: 'writer',
			description: 'writer',
		},
		{
			username: 'moderator',
			password: 'moderator123',
			name: 'moderator',
			lastName: 'moderator',
			email: 'moderator@mod.com',
			profileImage: 'moderator',
			description: 'moderator',
		},
	];
    public async up(queryRunner: QueryRunner): Promise<void> {
		const repository = getRepository(UsersEntity);
		const roleRepository = getRepository(RoleEntity);
		for (const user of this.users) {
			const userEntity = new UsersEntity();
			const role = await roleRepository.findOne({ name: user.username.toUpperCase() });
			userEntity.username = user.username;
			userEntity.password = user.password;
			userEntity.name = user.name;
			userEntity.lastName = user.lastName;
			userEntity.email = user.email;
			userEntity.profileImage = user.profileImage;
			userEntity.description = user.description;
			userEntity.role = role;
			await repository.save(userEntity);
		}
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		const usernames = this.users.map(user => user.username);
		const repository = getRepository(UsersEntity);
		for (const username of usernames) {
			await repository.delete({ username });
		}
		console.log('Default users deleted');
    }

}
