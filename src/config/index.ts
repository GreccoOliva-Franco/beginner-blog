import dotenv from 'dotenv';
dotenv.config();
const {
	APP_URL,
	APP_PORT,
	DB_TYPE,
	DB_HOST,
	DB_PORT,
	DB_USERNAME,
	DB_PASSWORD,
	DB_DATABASE,
	JWT_KEY,
	SMTP_SERVICE,
	SMTP_USER,
	SMTP_PASSWORD,
} = process.env;

export const config = {
	api: {
		url: APP_URL,
		port: APP_PORT,
	},
	db: {
		type: DB_TYPE as 'mysql' | 'mariadb',
		host: DB_HOST,
		port: DB_PORT,
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: DB_DATABASE,
	},
	jwt: {
		secret: JWT_KEY,
	},
	mailer: {
		service: SMTP_SERVICE,
		user: SMTP_USER,
		password: SMTP_PASSWORD,
	},
};
