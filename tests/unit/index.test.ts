type InfoBasic = {
	name: string,
	lastname: string,
	username: string,
	password: string,
}

describe('Hello world', () => {
	it('Should return "hello world"', () => {
		const test = 'hello world';

		expect(test).toBe('hello world');
	});

	it('Should return userInfoBasic', () => {
		const user = {
			userInfoBasic: {},
		};

		user.userInfoBasic = {
			name: 'test',
			lastname: 'test',
			username: 'test',
			password: 'test',
		};

		expect(user.userInfoBasic);
	});
});
