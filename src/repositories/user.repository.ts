import { UsersEntity } from './../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UsersEntity)
export class UserRepository extends Repository<UsersEntity> {
	// Find
	async findByUsername(username: string): Promise<UsersEntity> {
		return await this.findOne({ username });
	}
	async findByEmail(email: string): Promise<UsersEntity> {
		return await this.findOne({ email });
	}

	// Delete
	async deleteByUsername(username: string) {
		const userRegister = await this.findOneOrFail({ username });
		return await this.softDelete(userRegister);
	}
}
