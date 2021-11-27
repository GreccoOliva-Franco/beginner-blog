import { UserCreate, UserUpdate, UserInfoBasic, UserInfoDetailed, UserInfoFull } from '../../../src/@types';
import { UserService } from '../../../src/services/user.service';
import { VALID_USER_DB_REGISTER } from '../mocks/user.mock';

jest.mock('../../../src/services/user.service');

describe('User service test', () => {
	const userCreate = {
		username: 'test',
		password: 'test',
		email: 'test@test.com',
		name: 'test',
		lastName: 'test',
		profileImage: 'test',
		description: 'test',
	};
});
