import { UsersEntity } from './../entities/user.entity';
import { UserRepository } from './../repositories/user.repository';
import { UserCreate, UserInfoDetailed, UserUpdate, UserInfoBasic } from './../@types';
import { getCustomRepository } from 'typeorm';
import { ArrayUtils } from "../utils";
export class UserService {
	async get(username: string): Promise<UserInfoDetailed> {
		try {
			const repository = getCustomRepository(UserRepository);
			const userRegister = await repository.findByUsername(username);
			return userRegister.userInfoFull;
		} catch (error) {
			throw new Error(`Error finding user`);
		}
	}

	async create(user: UserCreate): Promise<UserInfoDetailed> {
		try {
			const repository = getCustomRepository(UserRepository);
			const User = Object.assign(new UsersEntity(), user);
            const result = await repository.save(User);
			return result.userInfoDetailed;
		} catch (error) {
			throw new Error(`Error creating user`);
		}
	}

	async update(user: UserUpdate): Promise<UserInfoBasic> {
		try {
			const repository = getCustomRepository(UserRepository);
			const userRegister = await repository.findByUsername(user.username);
			const data = ArrayUtils.removeEmptyKeys(user);
			const newUserRegister = Object.assign(userRegister, data);
			const result = await repository.save(newUserRegister);
			return result.userInfoBasic;
		} catch (error) {
			throw new Error(`Error updating user`);
		}
	}

	async delete(username: string) {
		try {
			const repository = getCustomRepository(UserRepository);
			await repository.deleteByUsername(username);
		} catch (error) {
			console.log(error);
			throw new Error(`There is no such user`);
		}
	}
}
