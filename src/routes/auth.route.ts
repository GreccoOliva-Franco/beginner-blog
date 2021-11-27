import { Router } from 'express';
import authController from '../controllers/auth.controller';
import AuthController from '../controllers/auth.controller';
import { userCreateSchemaValidate } from '../validators/users/user.validator';

const routes = Router();

routes
	.post('/login', AuthController.login)
	.post('/signin', [userCreateSchemaValidate], authController.signin);

export default routes;
