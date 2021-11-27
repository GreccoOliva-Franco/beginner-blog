import { Router } from 'express';
import userController from '../controllers/user.controller';
import { isAuthenticated } from '../middleware/auth.middleware';
import { userCreateSchemaValidate, userUpdateSchemaValidate } from '../validators/users/user.validator';

const routes = Router();

routes
	.get('/:username', [isAuthenticated()], userController.findOne)
	.post('/', [userCreateSchemaValidate], userController.create)
	.patch('/', [userUpdateSchemaValidate], userController.update)
	.delete('/:username', userController.delete);


export default routes;
