import { UserCreate, UserUpdate } from './../@types';
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

class UserController {
	async findOne(req: Request, res: Response) {
		try {
			const { username } = req.params;
			const userData = await new UserService().findByUsername(username);
			return res.json({
				message: "User found",
				success: true,
				data: userData,
			});
		} catch (error) {
			return res.json({
				message: "User does not exist",
				success: false,
			});
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
			return res.json({
				message: "User doesn't exist",
				success: false,
			});
		};
	};
}

export default new UserController();
