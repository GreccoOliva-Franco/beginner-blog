import { UsersEntity } from './../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../@types';

@EntityRepository(UsersEntity)
export class UserRepository extends Repository<UsersEntity> {
	async findByUsername(username: string): Promise<User> {
		const user = await this.findOne({ username });
		return user;
	}
	async findByEmail(email: string): Promise<User> {
		const user = await this.findOne({ email });
		return user.userInfo;
	}
}
