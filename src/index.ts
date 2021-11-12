import { config } from './config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import morgan from 'morgan';
import helmet from 'helmet';
import { typeOrmConfig } from './config/typeorm.config';

// Try establish database connection
createConnection(typeOrmConfig)
	.then(async () => {

		// Init express app
		const app = express();
		app.use(helmet());
		app.use(morgan('dev'));

		app.use(
			express.urlencoded({
				extended: true,
			}),
			);
		app.use(express.json());
		app.use(cors());

		// Register all application routes
		app.use('/api/', routes);

		app.listen(process.env.APP_PORT, () => {
			console.log(`⚡️[server]: Server is running at ${config.api.url}`);
		});
	})
	.catch((err) => console.log(err));
