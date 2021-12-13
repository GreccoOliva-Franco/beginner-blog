export interface CategoryInfo {
	id: string;
	creatorId: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface CategoryContent {
	id: string;
	name: string;
	creatorId: string;
}

export interface CategoryCreate {
	name: string;
	creatorId: string;
}

export interface CategoryInfoFull extends CategoryInfo {
	name: string;
}