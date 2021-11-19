import connection from "../connection";
import { Repository } from "typeorm";

const user = {
	username: 'test',
	password: 'test',
	email: 'test@test.com',
	name: 'test',
	lastName: 'test',
	profileImage: 'test',
	description: 'test',
};
let userRegister;

beforeAll(async () => {
	await connection.create();
	userRegister = await new Repository().save(user);
});

afterAll(async () => {
	await connection.close();
});

afterEach(async () => {
	await connection.clear();
});

describe('User entity properties', () => {
	// get userRegister fields
	it('Should return a UsersEntity', () => {
		expect(userRegister.username).toBe('test');
		expect(userRegister.password).toBeInstanceOf(String);
		expect(userRegister.email).toBe('test@test.com');
		expect(userRegister.name).toBe('test');
		expect(userRegister.lastName).toBe('test');
		expect(userRegister.profileImage).toBe('test');
		expect(userRegister.description).toBe('test');
		expect(userRegister.createdAt).toBeInstanceOf(Date);
		expect(userRegister.updatedAt).toBeInstanceOf(Date);
		expect(userRegister.deletedAt).toBe(null);
	});

	it('Should hash the password', () => {
		expect(userRegister.password).not.toBe(user.password);
	});

	// get user.userInfoBasic
	it('Should return a userInfoBasic property', () => {
		expect(userRegister.userInfoBasic.id).toBeInstanceOf(String);
		expect(userRegister.userInfoBasic.username).toBe('test');
		expect(userRegister.userInfoBasic.name).toBe('test');
		expect(userRegister.userInfoBasic.lastName).toBe('test');
		expect(userRegister.userInfoBasic.profileImage).toBe('test');
		expect(userRegister.userInfoBasic.description).toBe('test');
	});

	// get user.userInfoDetailed
	it('Should return a userInfoDetailed property', () => {
		expect(userRegister.userInfoDetailed.id).toBeInstanceOf(String);
		expect(userRegister.userInfoDetailed.username).toBe('test');
		expect(userRegister.userInfoDetailed.name).toBe('test');
		expect(userRegister.userInfoDetailed.lastName).toBe('test');
		expect(userRegister.userInfoDetailed.profileImage).toBe('test');
		expect(userRegister.userInfoDetailed.description).toBe('test');
		expect(userRegister.userInfoDetailed.email).toBe('test@test.com');
		expect(userRegister.userInfoDetailed.createdAt).toBeInstanceOf(Date);
		expect(userRegister.userInfoDetailed.updatedAt).toBeInstanceOf(Date);
	});

	// get user.userInfoFull
	it('Should return a userInfoFull property', () => {
		expect(userRegister.userInfoFull.id).toBeInstanceOf(String);
		expect(userRegister.userInfoFull.username).toBe('test');
		expect(userRegister.userInfoFull.name).toBe('test');
		expect(userRegister.userInfoFull.lastName).toBe('test');
		expect(userRegister.userInfoFull.profileImage).toBe('test');
		expect(userRegister.userInfoFull.description).toBe('test');
		expect(userRegister.userInfoFull.email).toBe('test@test.com');
		expect(userRegister.userInfoFull.createdAt).toBeInstanceOf(Date);
		expect(userRegister.userInfoFull.updatedAt).toBeInstanceOf(Date);
		expect(userRegister.userInfoFull.password).toBeInstanceOf(String);
	});
});
