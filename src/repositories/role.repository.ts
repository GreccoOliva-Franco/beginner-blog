import { RoleEntity } from './../entities/role.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RoleEntity)
export class RoleRepository extends Repository<RoleEntity> {
	// Find
	async findByName(rolName: string): Promise<RoleEntity> {
		return await this.findOne({ where: { name: rolName.toUpperCase() } });
	}

	// Find
	async findById(id: string): Promise<RoleEntity> {
		return await this.findOne({ id: id });
	}
}
