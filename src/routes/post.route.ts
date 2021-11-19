import { Router } from 'express';
import postController from '../controllers/post.controller';
import { postCreateSchemaValidate, postUpdateSchemaValidate } from '../validators/posts/post.validator';

const routes = Router();

routes
	.get('/:id', postController.get)
	.post('/', [postCreateSchemaValidate], postController.create)
	.patch('/', [postUpdateSchemaValidate], postController.update)
	.delete('/:id', postController.delete);

export default routes;
