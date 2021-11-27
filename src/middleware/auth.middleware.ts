import passport from 'passport';

export function isAuthenticated() {
	return passport.authenticate('jwt', { session: false });
}
