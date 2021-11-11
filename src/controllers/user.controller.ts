import { UserCreate } from './../@types/users.type';
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

class UserController {

	async create(req: Request, res: Response) {
		const {
			username,
			password,
			name,
			lastName,
			email,
			profileImage,
			description,
		} = req.body;
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
}

export default new UserController();
