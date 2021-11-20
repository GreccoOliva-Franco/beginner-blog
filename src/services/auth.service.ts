import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/user.repository';

export class AuthService {
	private repository: UserRepository;
	constructor() {
		this.repository = getCustomRepository(UserRepository);
	}

	async login(email: string, password: string) {
		const user = await this.repository.findOne({ email });
		if (!user) {
			throw new Error('Unable to login');
		}
		const isMatch = user.validatePassword(password);
		if (!isMatch) {
			throw new Error('Unable to login');
		}
		return user;
	}
}
