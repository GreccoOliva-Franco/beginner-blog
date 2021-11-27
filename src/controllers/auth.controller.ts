import { UserService } from './../services/user.service';
import { UserCreate } from './../@types/users.type';
import { AuthUtil } from './../utils/auth.util';
import { AuthService } from './../services/auth.service';
import { Request, Response } from 'express';
import passport from 'passport';

class AuthController {
	async login(req: Request, res: Response) {
		passport.authenticate('local', { session: false }, (err, user, info) => {
			if (err || !user) {
				return res.status(400).json({
					message: err.message,
					user,
				});
			}
			req.login(user, { session: false }, (err) => {
				if (err) {
					res.send(err);
				}
				// generate a signed son web token with the contents of user object and return it in the response
				const token = new AuthUtil().signJwt(user);
				return res.json({ user, token });
			});
		})(req, res);
	};

	async signin(req: Request, res: Response) {
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
			const userData = await new AuthService().signin(user);
			const token = await new AuthUtil().bearerToken(userData);
			return res.json({
				message: 'User created',
				success: true,
				data: { ...token },
			});
		} catch (error) {
			console.log(error);
			return res.json({
				message: "User not created",
				success: false,
				error: error.message,
			});
		}
	}
}

export default new AuthController();
