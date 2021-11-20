// External modules
import { createConnection, getRepository } from 'typeorm';

// Local modules
import { typeOrmTestConfig } from '../typeorm.config';
import { UsersEntity } from '../../../src/entities/user.entity';

let connection;
let user;
let repository;

beforeAll(async () => {
	user = {
		username: 'test',
		password: 'test',
		name: 'test',
		lastName: 'test',
		email: 'test@test.com',
		profileImage: 'test',
		description: 'test',
	};

	connection = await createConnection(typeOrmTestConfig);
	repository = getRepository(UsersEntity);
	try {
		await repository.save(user);
	} catch (error) {
		connection.dropDatabase();
		connection.close();
		createConnection(typeOrmTestConfig);
		await repository.save(user);
	};
});

afterAll(async () => {
	await connection.dropDatabase();
	await connection.close();
});

describe('Test User entity properties', () => {
	it('Should be connected to the DB', () => {
		expect(connection.isConnected).toBe(true);
	});

	it('Should return only one register with a find({}) search', async () => {
		const response = await repository.find({});
		expect(response.length).toBe(1);
	});

	it('Should return an "id" property', async () => {
		const response = await repository.find({});
		expect(response[0].id).not.toBeUndefined();
	});

	it('Should return an "id" String-type property', async () => {
		const response = await repository.find({});
		console.log(typeof response[0].id);
		expect(response[0].id).toBeInstanceOf(String);
	});

	it('Should return an "username" property', async () => {
		const response = await repository.find({});
		expect(response[0].username).not.toBeUndefined();
	});

	it('Should return an "username": "test" pair', async () => {
		const response = await repository.find({});
		expect(response[0].username).toBe('test');
	});

	it('Should return an "name" property', async () => {
		const response = await repository.find({});
		expect(response[0].name).not.toBe(undefined);
	});

	it('Should return an "name": "test" pair', async () => {
		const response = await repository.find({});
		expect(response[0].name).toBe('test');
	});

	it('Should return an "lastName" property', async () => {
		const response = await repository.find({});
		expect(response[0].lastName).not.toBe(undefined);
	});

	it('Should return an "lastName": "test" pair', async () => {
		const response = await repository.find({});
		expect(response[0].lastName).toBe('test');
	});

	it('Should return an "email" property', async () => {
		const response = await repository.find({});
		expect(response[0].email).not.toBe(undefined);
	});

	it('Should return an "email": "test@test.com" pair', async () => {
		const response = await repository.find({});
		expect(response[0].email).toBe('test@test.com');
	});

	it('Should return an "profileImage" property', async () => {
		const response = await repository.find({});
		expect(response[0].profileImage).not.toBe(undefined);
	});

	it('Should return an "profileImage": "test" pair', async () => {
		const response = await repository.find({});
		expect(response[0].profileImage).toBe('test');
	});

	it('Should return an "description" property', async () => {
		const response = await repository.find({});
		expect(response[0].description).not.toBe(undefined);
	});

	it('Should return an "description": "test" pair', async () => {
		const response = await repository.find({});
		expect(response[0].description).toBe('test');
	});

	it('Should return a "createdAt" property', async () => {
		const response = await repository.find({});
		expect(response[0].createdAt).not.toBe(undefined);
	});

	it('Should return a "createdAt" Date-type property', async () => {
		const response = await repository.find({});
		expect(response[0].createdAt).toBeInstanceOf(Date);
	});

	it('Should return a "updatedAt" property', async () => {
		const response = await repository.find({});
		expect(response[0].updatedAt).not.toBe(undefined);
	});

	it('Should return a "updatedAt" Date-type property', async () => {
		const response = await repository.find({});
		expect(response[0].updatedAt).toBeInstanceOf(Date);
	});

	it('Should return a "deletedAt" property', async () => {
		const response = await repository.find({});
		expect(response[0].deletedAt).not.toBe(undefined);
	});

	it('Should return a "deletedAt" Null-type property', async () => {
		const response = await repository.find({});
		expect(response[0].deletedAt).toBe(null);
	});

	it('Should return a "password" property', async () => {
		const response = await repository.find({});
		expect(response[0].password).not.toBe(undefined);
	});

	it('Should return a "password" String-type property', async () => {
		const response = await repository.find({});
		console.log(typeof response[0].password);
		expect(response[0].password).toBeInstanceOf(String);
	});

	it('Should return a hashed "password". Should not return "test")', async () => {
		const response = await repository.find({});
		expect(response[0].password).not.toBe('test');
	});

	it('Should return a user info (Basic) with needed keys', async () => {
		const response = await repository.find({});
		expect(response[0].userInfoBasic.id).toBeInstanceOf(String);
		expect(response[0].userInfoBasic.username).toBe('test');
		expect(response[0].userInfoBasic.name).toBe('test');
		expect(response[0].userInfoBasic.lastName).toBe('test');
		expect(response[0].userInfoBasic.profileImage).toBe('test');
		expect(response[0].userInfoBasic.description).toBe('test');
	});

	it('Should return a user info (Detailed) with needed keys', async () => {
		const response = await repository.find({});
		expect(response[0].userInfoDetailed.id).not.toBeUndefined();
		expect(response[0].userInfoDetailed.username).not.toBeUndefined();
		expect(response[0].userInfoDetailed.name).not.toBeUndefined();
		expect(response[0].userInfoDetailed.lastName).not.toBeUndefined();
		expect(response[0].userInfoDetailed.profileImage).not.toBeUndefined();
		expect(response[0].userInfoDetailed.description).not.toBeUndefined();
		expect(response[0].userInfoDetailed.email).not.toBeUndefined();
		expect(response[0].userInfoDetailed.createdAt).not.toBeUndefined();
		expect(response[0].userInfoDetailed.updatedAt).not.toBeUndefined();
	});

	it('Should return a user info (Full) with needed keys', async () => {
		const response = await repository.find({});
		expect(response[0].userInfoFull.id).not.toBeUndefined();
		expect(response[0].userInfoFull.username).not.toBeUndefined();
		expect(response[0].userInfoFull.name).not.toBeUndefined();
		expect(response[0].userInfoFull.lastName).not.toBeUndefined();
		expect(response[0].userInfoFull.email).not.toBeUndefined();
		expect(response[0].userInfoFull.profileImage).not.toBeUndefined();
		expect(response[0].userInfoFull.description).not.toBeUndefined();
		expect(response[0].userInfoFull.createdAt).not.toBeUndefined();
		expect(response[0].userInfoFull.updatedAt).not.toBeUndefined();
		expect(response[0].userInfoFull.password).not.toBeUndefined();
	});
});
