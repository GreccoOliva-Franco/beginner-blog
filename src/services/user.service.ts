import { UsersEntity } from './../entities/user.entity';
import { UserRepository } from './../repositories/user.repository';
import { UserCreate, UserUpdate } from './../@types/users.type';
import { getCustomRepository } from 'typeorm';
import {ArrayUtils} from "../utils"
export class UserService {
	async create(user: UserCreate) {
		try {
			const repository = getCustomRepository(UserRepository);
			const User = Object.assign(new UsersEntity(), user);
            const result = await repository.save(User);
			return result.userInfo;
		} catch (error) {
			throw new Error(`Error creating user: [${error}]`);
		}
	}

	async update(user: UserUpdate) {
		try {
			const repository = getCustomRepository(UserRepository);
			const userRegister = await repository.findByUsername(user.username);
			const data = ArrayUtils.removeEmptyKeys(user);
			const newUserRegister = Object.assign(userRegister, data);
			const result = await repository.save(newUserRegister);
			return result.userInfo;
		} catch (error) {
			throw new Error(`Error updating user: [${error}]`);
		}
	}
}
