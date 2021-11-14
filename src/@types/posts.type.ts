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
