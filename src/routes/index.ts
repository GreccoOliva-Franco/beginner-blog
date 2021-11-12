import { Request, Response, Router } from 'express';
import users from './user.route';
const routes = Router();

routes.get('/', (request: Request, response: Response) => {
	return response.json({
		info: 'Beginner Blog API',
		version: '1.0.0',
	});
});

routes.use('/users', users);

export default routes;
