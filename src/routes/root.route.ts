import { Router } from 'express';
import rootController from '../controllers/root.controller';

const routes = Router();

routes
	.get('/', rootController.info);

export default routes;
