import rootRoutes from './root.route';
import usersRoutes from './user.route';
import postsRoutes from './post.route';
import commentsRoutes from './comment.route';
import authRoutes from './auth.route';
import { Router } from 'express';

const routes = Router();

routes.use('/info', rootRoutes);
routes.use('/users', usersRoutes);
routes.use('/posts', postsRoutes);
routes.use('/comments', commentsRoutes);
routes.use('/auth', authRoutes);
export default routes;
