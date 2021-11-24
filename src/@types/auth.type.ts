import { RoleEntity } from './../entities/role.entity';
export interface AuthPayload {
	id: string;
	username: string;
	name: string;
	lastName: string;
	email: string;
	profileImage: string;
	role: RoleEntity;
}
