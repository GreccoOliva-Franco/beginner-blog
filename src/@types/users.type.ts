export interface UserInfoBasic {
	id: string;
	username: string;
	name: string;
	lastName: string;
	profileImage: string;
	description: string;
}

export interface UserInfoDetailed extends UserInfoBasic {
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserInfoFull extends UserInfoDetailed {
	password: string;
}

export interface UserCreate {
	username: string;
	password: string;
	name: string;
	lastName: string;
	email: string;
	profileImage: string;
	description: string;
}

export interface UserUpdate {
	username: string,
	name?: string;
	lastName?: string;
	profileImage?: string;
	description?: string;
}

// eslint-disable-next-line no-shadow
export enum Roles {
	ADMIN= 'ADMIN',
	USER= 'USER',
	WRITER= 'WRITER',
	MODERATOR= 'MODERATOR',
}
