import { Router } from 'express';
import userController from '../controllers/user.controller';
const routes = Router();

routes.post('/', userController.createUser);

export default routes;