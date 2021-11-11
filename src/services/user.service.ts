import { UsersEntity } from './../entities/user.entity';
import { UserRepository } from './../repositories/user.repository';
import { UserCreate } from './../@types/users.type';
import { getCustomRepository } from 'typeorm';
export class UserService {
	async create(user: UserCreate) {
		try {
			const repository = getCustomRepository(UserRepository);
			const User = new UsersEntity();
			User.username = user.username;
			User.password = user.password;
			User.name = user.name;
			User.lastName = user.lastName;
			User.email = user.email;
			User.profileImage = user.profileImage;
			User.description = user.description;
			const result = await repository.save(user);
			return result.userInfo;
		} catch (error) {
			throw new Error(`Error creating user: [${error}]`);
		}
	}
}
