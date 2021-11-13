import { UserCreate, UserUpdate } from './../@types/users.type';
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

class UserController {
	async create(req: Request, res: Response) {
		try {
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
			const userData = await new UserService().create(user);

			return res.json({
				message: 'User created',
				success: true,
				data: userData,
			});
		} catch (error) {
			console.log(error);
			return {
				message: "User not created",
				success: false,
				error: error,
			};
		}
	}

	async update(req: Request, res: Response) {
		const { username, name, lastName, profileImage, description } = req.body;
		const user: UserUpdate = { username, name, lastName, profileImage, description };
		const userData = await new UserService().update(user);

		return res.json({
			message: 'User updated',
			success: true,
			data: userData,
		});
	}

	async delete(req: Request, res: Response) {
		try {
			const { username } = req.params;
			await new UserService().delete(username);

			return res.json({
				message: "User deleted",
				success: true,
			});
		} catch (error) {
			console.log(error);

			return {
				message: "There is no such user",
				success: false,
			};
		};
	};
}

export default new UserController();
