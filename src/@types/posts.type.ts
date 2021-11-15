export interface PostInfo {
	id: string;
	ownerId: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface PostContent extends PostInfo {
	title: string;
	slug: string;
	content: string;
}

export interface PostCreate {
	title: string;
	content: string;
	ownerId: string;
}

export interface PostUpdate {
	id: string;
	ownerId: string;
	title?: string;
	content?: string;
}
