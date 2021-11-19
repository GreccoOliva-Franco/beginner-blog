import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const typeOrmTestConfig: MysqlConnectionOptions = {
	type: 'mysql',
	host: 'localhost',
	port: 3337,
	username: 'root',
	password: 'root',
	database: 'beginner-blog-test',
	entities: [ __dirname + '/../**/*.entity.{js,ts}' ],
	synchronize: true,
	migrations: ['../migrations/**/*.ts'],
	subscribers: ['../subscribers/**/*.ts'],
	connectTimeout: 10000,
};
