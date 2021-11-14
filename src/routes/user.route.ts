import { Router } from 'express';
import userController from '../controllers/user.controller';

const routes = Router();

routes
	.get('/:username', userController.get)
	.post('/', userController.create)
	.patch('/', userController.update)
	.delete('/:username', userController.delete);

export default routes;
