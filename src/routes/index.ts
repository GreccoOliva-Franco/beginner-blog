import rootRoutes from './root.route';
import usersRoutes from './user.route';
import postsRoutes from './post.route';

import { Router } from 'express';

const routes = Router();

routes.use('/info', rootRoutes);
routes.use('/users', usersRoutes);
routes.use('/posts', postsRoutes);

export default routes;
