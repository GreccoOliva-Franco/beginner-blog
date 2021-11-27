import commentController from '../controllers/comment.controller';

import { Router } from 'express';
import { protectByRole } from '../middleware/routes.middleware';
import { Roles } from '../@types/users.type';
import { isAuthenticated } from '../middleware/auth.middleware';

const routes = Router();

routes
	.get('/:id', [ isAuthenticated(), protectByRole([Roles.ADMIN, Roles.MODERATOR])], commentController.get)
	.post('/', commentController.create)
	.delete('/:id', commentController.delete);

export default routes;
