import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const typeOrmTestConfig: MysqlConnectionOptions = {
	type: 'mysql',
	host: 'localhost',
	port: "MODIFY THIS",
	username: "MODIFY THIS",
	password: "MODIFY THIS",
	database: "MODIFY THIS",
	entities: [ __dirname + '/../../src/entities/*.entity.{js,ts}' ],
	synchronize: true,
	migrations: ['../migrations/**/*.ts'],
	subscribers: ['../subscribers/**/*.ts'],
	connectTimeout: 10000,
};
