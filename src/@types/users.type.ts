export interface User {
	id: string;
	username: string;
	name: string;
	lastName: string;
	email: string;
	profileImage: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
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
	username?: string,
	name?: string;
	lastName?: string;
	profileImage?: string;
	description?: string;
}
