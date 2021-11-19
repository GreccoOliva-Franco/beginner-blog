export interface CommentInfo {
	id: string;
	userId: string;
	postId: string;
	createdAt: Date;
}

export interface CommentContent extends CommentInfo {
	content: string;
}

export interface CommentCreate {
	userId: string;
	postId: string;
	content: string;
}
