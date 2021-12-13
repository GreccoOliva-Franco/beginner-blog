import { Request, Response } from 'express';
import { CategoryContent } from './../@types';
import { CategoryService } from '../services/category.service';

class CategoryController {
	async get(req: Request, res: Response) {
		try {
			const { category } = req.params;
			const categoryData = await new CategoryService().get(category);

			return res.json({
				message: 'Category found',
				success: true,
				data: categoryData,
			});
		} catch (error) {
			return res.json({
				message: 'Category does not exist',
				success: false,
			});
		}
	}

	async create(req: Request, res: Response) {
		try {
			const { id, creatorId, name } = req.body;
			const category: CategoryContent = { id, creatorId, name };
			const categoryData = await new CategoryService().create(category);

			return res.json({
				message: 'Category created',
				success: true,
				data: categoryData,
			});
		} catch (error) {
			return res.json({
				message: 'Category not created',
				success: false,
				error: error,
			});
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			await new CategoryService().delete(id);

			return res.json({
				message: 'Category deleted',
				success: true,
			});
		} catch (error) {
			return res.json({
				message: "Category doesn't exist",
				success: false,
			});
		}
	}
}

export default new CategoryController();
