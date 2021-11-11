import { config } from './index';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const typeOrmConfig: MysqlConnectionOptions = {
	type: config.db.type,
	host: config.db.host,
	port: parseInt(config.db.port),
	username: config.db.username,
	password: config.db.password,
	database: config.db.database,
	entities: [ __dirname + '/../**/*.entity.{js,ts}' ],
	synchronize: true,
	migrations: ['../migrations/**/*.ts'],
	subscribers: ['../subscribers/**/*.ts'],
	connectTimeout: 10000,
};
