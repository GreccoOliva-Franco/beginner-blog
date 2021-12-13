import { CategoryEntity } from './../entities/category.entity';
import { CategoryRepository } from '../repositories/category.repository';
import { CategoryContent, CategoryCreate } from './../@types';
import { getCustomRepository } from 'typeorm';

export class CategoryService {
	private repository: CategoryRepository;
	constructor() {
		this.repository = getCustomRepository(CategoryRepository);
	}

	async get(categoryId: string): Promise<CategoryContent> {
		try {
			const categoryRegister = await this.repository.findOneOrFail(categoryId);
			return categoryRegister.categoryContent;
		} catch (error) {
			throw new Error(`Error getting category`);
		}
	}

	async create(category: CategoryCreate): Promise<CategoryContent> {
		try {
			const Category = Object.assign(new CategoryEntity(), category);
            const result = await this.repository.save(Category);
			return result.categoryContent;
		} catch (error) {
			throw new Error(`Error creating category`);
		}
	}

	async delete(categoryId: string) {
		try {
			await this.repository.softDelete({ id: categoryId });
		} catch (error) {
			throw new Error(`There is no such category`);
		}
	}
}
