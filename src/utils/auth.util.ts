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
}
