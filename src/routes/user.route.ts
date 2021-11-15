import { Router } from 'express';
import userController from '../controllers/user.controller';
import { userSchemaValidate } from '../validators/user.validator';

const routes = Router();

routes
	.post('/', [userSchemaValidate], userController.create)
	.patch('/', userController.update);
export default routes;
