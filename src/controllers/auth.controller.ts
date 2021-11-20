import { AuthService } from './../services/auth.service';
import { Request, Response } from 'express';

class AuthController {
	async login(req: Request, res: Response) {
		const { email, password } = req.body;
		const user = await new AuthService().login(email, password);
		res.json({ user });
	}
}

export default new AuthController();
