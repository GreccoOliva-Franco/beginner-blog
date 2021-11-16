import commentController from '../controllers/comment.controller';

import { Router } from 'express';

const routes = Router();

routes
	.post('/', commentController.create);

export default routes;
