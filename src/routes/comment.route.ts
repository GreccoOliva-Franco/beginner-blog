import commentController from '../controllers/comment.controller';

import { Router } from 'express';

const routes = Router();

routes
	.get('/:id', commentController.get)
	.post('/', commentController.create)
	.delete('/:id', commentController.delete);

export default routes;
