import 'reflect-metadata';
import passport from 'passport';
import './config/passport.config';
import { config } from './config';
import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import apiRoutes from './routes';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
// Try establish database connection
createConnection()
	.then(async () => {

		// Init express app
		const app = express();
		app.use(helmet());
		app.use(morgan('dev'));
		app.use(compression({
			level: 9,

		}));
		app.use(
			express.urlencoded({
				extended: true,
			}),
		);
		app.use(express.json());
		app.use(cors());
		app.use(passport.initialize());
		// Register all application routes
		app.use('/api/', apiRoutes);

		app.listen(process.env.APP_PORT, () => {
			console.log(`⚡️[server]: Server is running at ${config.api.url}`);
		});
	})
	.catch((err) => console.log(err));
