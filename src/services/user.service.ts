import { UsersEntity } from './../entities/user.entity';
import { UserRepository } from './../repositories/user.repository';
import { UserCreate, UserInfoDetailed, UserUpdate, UserInfoBasic } from './../@types';
import { getCustomRepository } from 'typeorm';
import { ArrayUtils } from "../utils";
export class UserService {
	private repository: UserRepository;
	constructor() {
		this.repository = getCustomRepository(UserRepository);
	}

	async findByUsername(username: string): Promise<UserInfoBasic> {
		try {
			const userRegister = await this.repository.findByUsername(username);
			return userRegister.userInfoBasic;
		} catch (error) {
			throw new Error(`Error finding user`);
		}
	}

	async findAll(): Promise<UserInfoBasic[]> {
		try {
			const users = await this.repository.find();
			return users.map(user => user.userInfoBasic);
		} catch (error) {
			throw new Error(`Error finding users`);
		}
	}

	async create(user: UserCreate): Promise<UserInfoDetailed> {
		try {
			const User = Object.assign(new UsersEntity(), user);
            const result = await this.repository.save(User);
			return result.userInfoDetailed;
		} catch (error) {
			throw new Error(`Error creating user`);
		}
	}

	async update(user: UserUpdate): Promise<UserInfoBasic> {
		try {
			const userRegister = await this.repository.findByUsername(user.username);
			const data = ArrayUtils.removeEmptyKeys(user);
			const newUserRegister = Object.assign(userRegister, data);
			const result = await this.repository.save(newUserRegister);
			return result.userInfoBasic;
		} catch (error) {
			throw new Error(`Error updating user`);
		}
	}

	async delete(username: string) {
		try {
			this.repository.deleteByUsername(username);
		} catch (error) {
			throw new Error(`There is no such user`);
		}
	}
}
