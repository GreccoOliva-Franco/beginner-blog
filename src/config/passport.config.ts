import { config } from './index';
import { AuthService } from './../services/auth.service';
import passport from 'passport';
import passportLocal from 'passport-local';
import passportJwt from 'passport-jwt';

const JWTStrategy = passportJwt.Strategy;
const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy({
	passwordField: 'password',
	usernameField: 'email',
}, (email, password, done) => {
	const authService = new AuthService();
	authService.login(email, password).then(user => {
		done(null, user, { message: 'Logged In Successfully' });
	}).catch(err => {
		done(err, false, { message: 'Unable to login' });
	});
},
));

passport.use(new JWTStrategy({
			jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.jwt.secret,
		}, (jwtPayload, done) => {
			return done(null, jwtPayload);
		},
	),
);

export default passport;
