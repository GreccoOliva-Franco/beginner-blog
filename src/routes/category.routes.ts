import { Router } from 'express';
import categoryController from '../controllers/category.controller';
// TODO: Create schema validators for create and update

const routes = Router();

routes
	.get('/:id', categoryController.get)
	.post('/', categoryController.create)
	.delete('/:id', categoryController.delete);

export default routes;
