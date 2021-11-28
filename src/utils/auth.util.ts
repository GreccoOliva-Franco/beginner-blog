import { UsersEntity } from './../entities/user.entity';
import { AuthPayload } from './../@types/auth.type';
import { sign, verify } from 'jsonwebtoken';
import { config } from '../config';
export class AuthUtil {
	signJwt(payload: AuthPayload) {
		return sign(payload, config.jwt.secret, {
			algorithm: config.jwt.algorithm,
			expiresIn: config.jwt.expiresIn,
	});
  }

  verifyJwt(token: string) {
	return verify(token, config.jwt.secret, {
		algorithms: [config.jwt.algorithm],
	});
  }

  async bearerToken(user: UsersEntity) {
	const payload: AuthPayload = {
		id: user.id,
		email: user.email,
		name: user.name,
		lastName: user.lastName,
		profileImage: user.profileImage,
		username: user.username,
		role: user.role,
	};
	return {
		token: `${config.auth.type} ${this.signJwt(payload)}`,
		...payload,
	};
}
}
