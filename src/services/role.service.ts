import { RoleEntity } from './../entities/role.entity';
import { getCustomRepository } from 'typeorm';
import { RoleRepository } from '../repositories/role.repository';
export class RoleService {
	private repository: RoleRepository;
	constructor() {
		this.repository = getCustomRepository(RoleRepository);
	}

	async findByName(rolName: string): Promise<RoleEntity> {
		return await this.repository.findByName(rolName);
	}

	async findById(id: string): Promise<RoleEntity> {
		return await this.repository.findById(id);
	}
}
