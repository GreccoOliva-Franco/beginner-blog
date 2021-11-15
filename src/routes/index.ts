import { Request, Response, Router } from 'express';
import usersRoutes from './user.route';
import postsRoutes from './post.route';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
	return response.json({
		info: 'Beginner Blog API',
		version: '1.0.0',
	});
});

routes.use('/users', usersRoutes);
routes.use('/posts', postsRoutes);

export default routes;
