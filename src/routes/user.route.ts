import { Router } from 'express';
import userController from '../controllers/user.controller';

const routes = Router();

routes
	.post('/', userController.create)
	.patch('/', userController.update)
	.delete('/:username', userController.delete);

export default routes;
