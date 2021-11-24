require('dotenv').config();


module.exports = {
	type: process.env.DB_TYPE,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	entities: [__dirname + '/**/*.entity.js'],
	synchronize: true,
	migrations: [__dirname + '/dist/migrations/*.js'],
	subscribers: [__dirname + '/dist/subscribers/*.js}'],
	connectTimeout: 10000,
	cli: {
		entitiesDir: './src/entities',
		migrationsDir: './src/migrations',
		subscribersDir: './src/subscribers',
	},
};

