import { RoleRepository } from './../repositories/role.repository';
import { UserCreate, Roles } from './../@types/users.type';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/user.repository';
export class AuthService {
	private repository: UserRepository;
	private roleRepository: RoleRepository;

	constructor() {
		this.repository = getCustomRepository(UserRepository);
		this.roleRepository = getCustomRepository(RoleRepository);
	}

	async login(email: string, password: string) {
		try {
			const user = await this.repository.findOne({ email }, { relations: ['role'] });
			if (!user) {
				throw new Error('Unable to login');
			}
			const isMatch = user.validatePassword(password);
			if (!isMatch) {
				throw new Error('Unable to login');
			}
			return user.userJwtPayload;
		} catch (error) {
			throw new Error(`Error logging in`);
		}
	}

	async signin(user: UserCreate) {
		try {
			const newUser = this.repository.create(user);
			const role = await this.roleRepository.findOne({ name: Roles.USER });
			newUser.role = role;
			await this.repository.save(newUser);
			return newUser;
		} catch (error) {
			throw new Error(`Error creating user`);
		}
	}
}
