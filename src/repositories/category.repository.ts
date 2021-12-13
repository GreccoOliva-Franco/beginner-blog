import { CategoryEntity } from './../entities/category.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {

	async findByUserId(userId: string): Promise<CategoryEntity[]> {
		return await this.find({ creatorId: userId });
	}
}
