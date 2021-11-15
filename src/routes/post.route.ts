import { Router } from 'express';
import postController from '../controllers/post.controller';

const routes = Router();

routes
	.post('/', postController.create)
	.patch('/', postController.update)
	.delete('/:id', postController.delete);

export default routes;
