import { AuthUtil } from './../utils/auth.util';
import { AuthService } from './../services/auth.service';
import { Request, Response } from 'express';
import passport from 'passport';

class AuthController {
	async login(req: Request, res: Response) {
		/* POST login. */
			passport.authenticate('local', { session: false }, (err, user, info) => {
				if (err || !user) {
					console.log({ info });
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
}

export default new AuthController();
