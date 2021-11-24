import { AuthUtil } from './../utils/auth.util';
import { getCustomRepository } from 'typeorm';
import { UsersEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { AuthPayload } from '../@types';
import { config } from '../config';
export class AuthService {
	private repository: UserRepository;
	private authUtil: AuthUtil;
	constructor() {
		this.repository = getCustomRepository(UserRepository);
		this.authUtil = new AuthUtil();
	}

	async login(email: string, password: string) {
		const user = await this.repository.findOne({ email }, { relations: ['role'] });
		if (!user) {
			throw new Error('Unable to login');
		}
		const isMatch = user.validatePassword(password);
		if (!isMatch) {
			throw new Error('Unable to login');
		}
		return user.userJwtPayload;
	}

	async signJwt(user: UsersEntity): Promise<string> {
		const payload: AuthPayload = {
			id: user.id,
			email: user.email,
			name: user.name,
			lastName: user.lastName,
			profileImage: user.profileImage,
			username: user.username,
			role: user.role,
		};
		return `${config.auth.type} ${this.authUtil.signJwt(payload)}`;
	}
}
