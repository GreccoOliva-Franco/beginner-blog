import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const routes = Router();

routes.post('/login', AuthController.login);

export default routes;
