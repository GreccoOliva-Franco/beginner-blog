import { createConnection, getConnection } from 'typeorm';
import { typeOrmTestConfig } from './typeorm.config';

const connection = {
	async create() {
		await createConnection(typeOrmTestConfig);
	},

	async close() {
		await getConnection().close();
	},

	async clear() {
		const entities = getConnection().entityMetadatas;

		entities.forEach(async (entity) => {
			const repository = getConnection().getRepository(entity.name);
			await repository.query(`DELETE FROM ${entity.tableName}`);
		});
	},
};
export default connection;
