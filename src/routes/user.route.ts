import { Router } from 'express';
import userController from '../controllers/user.controller';
import { userSchemaValidate } from '../validators/user.validator';

const routes = Router();

routes
	.get('/:username', userController.get)
	.post('/', [userSchemaValidate], userController.create)
	.patch('/', userController.update)
	.delete('/:username', userController.delete);

export default routes;
