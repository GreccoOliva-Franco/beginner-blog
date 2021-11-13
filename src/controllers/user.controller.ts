import { UserCreate, UserUpdate } from './../@types/users.type';
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

class UserController {
	async create(req: Request, res: Response) {
		const { username, password, name, lastName, email, profileImage, description } = req.body;
		const user: UserCreate = {
			username,
			password,
			name,
			lastName,
			email,
			profileImage,
			description,
		};
		const service = await new UserService().create(user);

		return res.json({
			message: 'User created',
			success: true,
			data: service,
		});
	}

	async update(req: Request, res: Response) {
		const { username, name, lastName, profileImage, description } = req.body;
		const user: UserUpdate = { username, name, lastName, profileImage, description };
		const service = await new UserService().update(user);

		return res.json({
			message: 'User updated',
			success: true,
			data: service,
		});
	}

	async delete(req: Request, res: Response) {
		const { username } = req.body;
		const results = await new UserService().delete(username);

		return res.json({
			message: 'User deleted',
			success: true,
			data: results
		})
	}
}

export default new UserController();
